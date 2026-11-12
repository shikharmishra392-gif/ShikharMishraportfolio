import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects } from './filter-projects';
import { PROJECTS, PERSONAL_INFO, SKILL_CATEGORIES, CERTIFICATIONS } from './portfolio-data';

test('filterProjects correctly filters by category', () => {
  const all = filterProjects(PROJECTS, 'all');
  assert.equal(all.length, 3);

  const aiProjects = filterProjects(PROJECTS, 'ai');
  assert.equal(aiProjects.length, 2);
  assert.ok(aiProjects.some((p) => p.id === 'studyai'));
  assert.ok(aiProjects.some((p) => p.id === 'wanderplan-ai'));

  const campus = filterProjects(PROJECTS, 'campus');
  assert.equal(campus.length, 1);
  assert.equal(campus[0].id === 'campusfind', true);
});

test('filterProjects correctly filters by search keyword', () => {
  const javaMatch = filterProjects(PROJECTS, 'all', 'Spring Boot');
  assert.equal(javaMatch.length, 3);

  const wanderMatch = filterProjects(PROJECTS, 'all', 'travel');
  assert.equal(wanderMatch.length, 1);
  assert.equal(wanderMatch[0].id, 'wanderplan-ai');

  const nonExistent = filterProjects(PROJECTS, 'all', 'nonexistent_technology_xyz');
  assert.equal(nonExistent.length, 0);
});

test('portfolio data integrity for Shikhar Mishra', () => {
  assert.equal(PERSONAL_INFO.name, 'Shikhar Mishra');
  assert.ok(PERSONAL_INFO.github.includes('shikharmishra392-gif'));
  assert.ok(PERSONAL_INFO.linkedin.includes('shikhar-mishra-82b744327'));
  assert.ok(PERSONAL_INFO.leetcode.includes('Shikharr_Mishra'));
  assert.equal(SKILL_CATEGORIES.length >= 4, true);
  assert.equal(PROJECTS.length, 3);
  assert.equal(CERTIFICATIONS.length, 4);
  assert.ok(CERTIFICATIONS.some((c) => c.id === 'aws-genai'));
  assert.ok(PERSONAL_INFO.achievements.includes('Academic Scholarship Holder'));
});
