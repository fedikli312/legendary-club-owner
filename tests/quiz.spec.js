import { test, expect } from '@playwright/test'

// Update this URL after deploying to Vercel/Netlify/GitHub Pages
const BASE_URL = process.env.BASE_URL || 'http://localhost:4173'

test.describe('Legendary Club Owner — Landing Page', () => {

  test('Hero section loads correctly', async ({ page }) => {
    await page.goto(BASE_URL)

    // Check main headline is visible
    await expect(page.getByText('LEGENDARY')).toBeVisible()
    await expect(page.getByText('CLUB OWNER')).toBeVisible()

    // Check CTA button exists
    const quizBtn = page.getByRole('button', { name: /What Kind of Manager Are You/i })
    await expect(quizBtn).toBeVisible()
  })

  test('Quiz CTA button scrolls to quiz section', async ({ page }) => {
    await page.goto(BASE_URL)

    const quizBtn = page.getByRole('button', { name: /What Kind of Manager Are You/i })
    await quizBtn.click()

    // Wait for scroll
    await page.waitForTimeout(800)

    // Quiz section heading should now be in view
    const quizSection = page.locator('#quiz')
    await expect(quizSection).toBeInViewport()
  })

  test('Quiz: Start button appears and is clickable', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    const startBtn = page.getByRole('button', { name: /START THE QUIZ/i })
    await expect(startBtn).toBeVisible()
    await startBtn.click()

    // Q1 should now appear
    await expect(page.getByText('QUESTION 1 OF 5')).toBeVisible()
  })

  test('Quiz: All 5 questions load and progress bar advances', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    // Start the quiz
    await page.getByRole('button', { name: /START THE QUIZ/i }).click()

    for (let q = 1; q <= 5; q++) {
      // Confirm question number
      await expect(page.getByText(`QUESTION ${q} OF 5`)).toBeVisible()

      // Click the first answer option
      const options = page.locator('button').filter({ hasNotText: /START|QUIZ|AGAIN|iOS|Android/i })
      const firstOption = options.first()
      await firstOption.click()

      if (q < 5) {
        // Wait for transition
        await page.waitForTimeout(700)
        await expect(page.getByText(`QUESTION ${q + 1} OF 5`)).toBeVisible()
      }
    }
  })

  test('Quiz: Result screen appears after all 5 answers', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    await page.getByRole('button', { name: /START THE QUIZ/i }).click()

    // Answer all 5 questions by always picking option index 0 (Tactician path)
    for (let q = 0; q < 5; q++) {
      await page.waitForTimeout(200)
      const answerBtns = page.locator('button').filter({ hasNotText: /START THE QUIZ|Try Again|Play Free|iOS|Android|Manager Are You/i })
      await answerBtns.first().click()
      await page.waitForTimeout(700)
    }

    // One of three result titles should appear
    const possibleResults = ['THE TACTICIAN', 'THE SCOUT', 'THE BUILDER']
    let resultFound = false
    for (const result of possibleResults) {
      const el = page.getByText(result)
      if (await el.isVisible().catch(() => false)) {
        resultFound = true
        break
      }
    }
    expect(resultFound).toBe(true)
  })

  test('Quiz: "Try Again" resets to the start screen', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    await page.getByRole('button', { name: /START THE QUIZ/i }).click()

    // Answer all 5
    for (let q = 0; q < 5; q++) {
      await page.waitForTimeout(200)
      const answerBtns = page.locator('button').filter({ hasNotText: /START THE QUIZ|Try Again|Play Free|iOS|Android|Manager Are You/i })
      await answerBtns.first().click()
      await page.waitForTimeout(700)
    }

    // Click Try Again
    await page.getByRole('button', { name: /Try Again/i }).click()

    // Should be back to start
    await expect(page.getByRole('button', { name: /START THE QUIZ/i })).toBeVisible()
  })

  test('Quiz: Result screen shows iOS download link', async ({ page }) => {
    await page.goto(BASE_URL)
    await page.locator('#quiz').scrollIntoViewIfNeeded()
    await page.waitForTimeout(400)

    await page.getByRole('button', { name: /START THE QUIZ/i }).click()

    for (let q = 0; q < 5; q++) {
      await page.waitForTimeout(200)
      const answerBtns = page.locator('button').filter({ hasNotText: /START THE QUIZ|Try Again|Play Free|iOS|Android|Manager Are You/i })
      await answerBtns.first().click()
      await page.waitForTimeout(700)
    }

    // iOS download link should appear on result screen
    const iosLink = page.getByRole('link', { name: /Play Free on iOS/i })
    await expect(iosLink).toBeVisible()
    await expect(iosLink).toHaveAttribute('href', /apps\.apple\.com/)
  })

})
