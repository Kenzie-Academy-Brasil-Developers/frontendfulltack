export interface IPagination {
    nextPage: string | null,
	currentPage: string | null,
	previousPage: string | null,
	amountPage: number,
	howManyFetched: number,
}
