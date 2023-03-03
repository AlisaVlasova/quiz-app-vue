export type Quiz = {
	id: number,
	img: string,
	name: string,
	questions: Question[],
}

export type Question = {
	id: number,
	text: string,
	options: Option[],
}

export type Option = {
	id: number,
	label: string,
	text: string,
	isCorrect: boolean,
}