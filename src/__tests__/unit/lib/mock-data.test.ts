import { describe, it, expect } from 'vitest';
import { pointsForLevel, getLevelFromPoints } from '~/lib/mock-data';

describe('Mock Data Utilities', () => {
  describe('pointsForLevel', () => {
    it('should return 0 for level 1', () => {
      expect(pointsForLevel(1)).toBe(0);
    });

    it('should return expected value for level 2', () => {
      // Math.floor(250 * Math.pow(1, 1.25)) = 250
      expect(pointsForLevel(2)).toBe(250);
    });

    it('should return expected value for level 3', () => {
      // Math.floor(250 * Math.pow(2, 1.25)) ≈ 594
      expect(pointsForLevel(3)).toBe(594);
    });

    it('should return expected value for level 4', () => {
      // Math.floor(250 * Math.pow(3, 1.25)) = 987
      expect(pointsForLevel(4)).toBe(987);
    });

    it('should return expected value for level 5', () => {
      // Math.floor(250 * Math.pow(4, 1.25)) = 1414
      expect(pointsForLevel(5)).toBe(1414);
    });

    it('should show increasing point requirements', () => {
      for (let i = 1; i < 20; i++) {
        expect(pointsForLevel(i + 1)).toBeGreaterThan(pointsForLevel(i));
      }
    });

    it('should handle higher levels', () => {
      expect(pointsForLevel(10)).toBeGreaterThan(pointsForLevel(5));
      expect(pointsForLevel(20)).toBeGreaterThan(pointsForLevel(10));
    });
  });

  describe('getLevelFromPoints', () => {
    it('should return level 1 for 0 points', () => {
      const result = getLevelFromPoints(0);
      expect(result.level).toBe(1);
      expect(result.progress).toBe(0);
    });

    it('should return level 1 for points below level 2', () => {
      const result = getLevelFromPoints(100);
      expect(result.level).toBe(1);
      expect(result.progress).toBeGreaterThan(0);
      expect(result.progress).toBeLessThan(1);
    });

    it('should return level 2 when reaching threshold', () => {
      const level2Threshold = pointsForLevel(2); // 250
      const result = getLevelFromPoints(level2Threshold);
      expect(result.level).toBe(2);
      expect(result.progress).toBe(0);
    });

    it('should return level 3 when reaching threshold', () => {
      const level3Threshold = pointsForLevel(3); // 594
      const result = getLevelFromPoints(level3Threshold);
      expect(result.level).toBe(3);
      expect(result.progress).toBe(0);
    });

    it('should calculate progress within a level', () => {
      const level2Points = pointsForLevel(2);
      const level3Points = pointsForLevel(3);
      const midwayPoints = Math.floor((level2Points + level3Points) / 2);

      const result = getLevelFromPoints(midwayPoints);
      expect(result.level).toBe(2);
      expect(result.progress).toBeGreaterThan(0.3);
      expect(result.progress).toBeLessThan(0.7);
    });

    it('should be inverse of pointsForLevel', () => {
      for (let level = 1; level <= 10; level++) {
        const points = pointsForLevel(level);
        const result = getLevelFromPoints(points);
        expect(result.level).toBe(level);
      }
    });

    it('should handle high point values', () => {
      const result = getLevelFromPoints(999999);
      expect(result.level).toBeGreaterThan(1);
      expect(result.progress).toBeGreaterThanOrEqual(0);
      expect(result.progress).toBeLessThanOrEqual(1);
    });

    it('should handle negative points gracefully', () => {
      const result = getLevelFromPoints(-100);
      expect(result.level).toBe(1);
    });

    it('should clamp progress between 0 and 1', () => {
      for (let i = 0; i < 100; i++) {
        const randomPoints = Math.floor(Math.random() * 100000);
        const result = getLevelFromPoints(randomPoints);
        expect(result.progress).toBeGreaterThanOrEqual(0);
        expect(result.progress).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('pointsForLevel and getLevelFromPoints integration', () => {
    it('should be consistent with each other', () => {
      // For any level, getting points and converting back should return same level
      for (let level = 1; level <= 10; level++) {
        const requiredPoints = pointsForLevel(level);
        const result = getLevelFromPoints(requiredPoints);
        expect(result.level).toBe(level);
      }
    });

    it('should handle points between levels correctly', () => {
      // Points between level thresholds should return lower level
      const level2Points = pointsForLevel(2); // 250
      const level3Points = pointsForLevel(3); // 594

      const midLevel = getLevelFromPoints(Math.floor((level2Points + level3Points) / 2));
      expect(midLevel.level).toBe(2);

      const justBeforeLevel3 = getLevelFromPoints(level3Points - 1);
      expect(justBeforeLevel3.level).toBe(2);

      const atLevel3 = getLevelFromPoints(level3Points);
      expect(atLevel3.level).toBe(3);
    });
  });
});
