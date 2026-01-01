"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";

export function ProfileClient() {
  const router = useRouter();
  const { data: session, update: updateSession } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const user = session?.user;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
  });

  // Sync form data with session user data
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        image: user.image || "",
      });
    }
  }, [user]);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          image: formData.image,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update profile");
      }

      // Trigger session refresh to update the JWT with new user data
      await updateSession();

      setSuccess("Profile updated successfully!");
      setIsEditing(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords don't match");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch("/api/profile/password", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to change password");
      }

      setSuccess("Password changed successfully!");
      setIsChangingPassword(false);
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to change password");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      const response = await fetch("/api/profile", {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete account");
      }

      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete account");
      setIsSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="animate-pulse">
          <div className="h-8 w-48 rounded bg-white/10" />
          <div className="mt-2 h-4 w-72 rounded bg-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
        <p className="mt-2 text-white/60">Manage your account information and preferences</p>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {success && (
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
          <p className="text-sm text-green-400">{success}</p>
        </div>
      )}

      {/* Profile Information */}
      <div className="rounded-3xl border border-white/10 bg-[var(--surface-card)] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Profile Information</h2>
          {!isEditing && (
            <Button
              variant="secondary"
              onClick={() => setIsEditing(true)}
              disabled={isSaving}
            >
              Edit Profile
            </Button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Name
            </label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={!isEditing || isSaving}
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Email
            </label>
            <Input
              type="email"
              value={formData.email}
              disabled
              className="cursor-not-allowed opacity-60"
            />
            <p className="mt-1 text-xs text-white/50">Email cannot be changed</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white/80">
              Profile Image URL (optional)
            </label>
            <Input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              disabled={!isEditing || isSaving}
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          {isEditing && (
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsEditing(false);
                  if (user) {
                    setFormData({
                      name: user.name || "",
                      email: user.email || "",
                      image: user.image || "",
                    });
                  }
                }}
                disabled={isSaving}
              >
                Cancel
              </Button>
            </div>
          )}
        </form>
      </div>

      {/* Password Change */}
      <div className="rounded-3xl border border-white/10 bg-[var(--surface-card)] p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Change Password</h2>
          {!isChangingPassword && (
            <Button
              variant="secondary"
              onClick={() => setIsChangingPassword(true)}
              disabled={isSaving}
            >
              Change Password
            </Button>
          )}
        </div>

        {isChangingPassword ? (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Current Password
              </label>
              <Input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, currentPassword: e.target.value })
                }
                disabled={isSaving}
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                New Password
              </label>
              <Input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, newPassword: e.target.value })
                }
                disabled={isSaving}
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Confirm New Password
              </label>
              <Input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                }
                disabled={isSaving}
                required
                minLength={6}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={isSaving}
              >
                {isSaving ? "Changing..." : "Change Password"}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
                }}
                disabled={isSaving}
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-white/60">Update your password to keep your account secure</p>
        )}
      </div>

      {/* Danger Zone */}
      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-2 text-xl font-semibold text-red-400">Danger Zone</h2>
        <p className="mb-4 text-sm text-white/60">
          Once you delete your account, there is no going back. All your data will be permanently deleted.
        </p>
        <Button
          variant="secondary"
          onClick={handleDeleteAccount}
          disabled={isSaving}
          className="border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}
