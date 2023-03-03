import quizes  from '../assets/data/quiz.json';
import type { Quiz } from '../types'

const DELAY = 500

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  });
}

export async function getQuizes(): Promise<Quiz[]> {
  await wait(DELAY)

	return new Promise(resolve => resolve(quizes));
}

export async function getQuizeById(id: Quiz['id']): Promise<Quiz> {
  await wait(DELAY)

	const quiz = quizes.find(item => item.id === id)

	return new Promise((resolve, reject) => quiz ? resolve(quiz) : reject(new Error('404')));
}
