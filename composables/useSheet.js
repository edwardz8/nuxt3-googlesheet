import { SPREAD_SHEET_ID, GOOGLE_API_KEY } from "@/secrets";

let sheetRange = "Sheet1!A1:D3";

export async function allRows() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${sheetRange}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}

export async function singleRow(row) {
    const rowRange = `Sheet1!A${row}:D${row}`
    console.log(rowRange)

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREAD_SHEET_ID}/values/${rowRange}?key=${GOOGLE_API_KEY}`
    return await useFetch(url)
}