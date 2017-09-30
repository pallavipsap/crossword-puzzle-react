export default function crosswordGrid(state = [], action) {
  switch (action.type) {

    case 'ADD_INPUT':
      let box = state.find(b => b.boxId == action.payload.id)
      box['value'] = action.payload.value
      return state

    case 'FETCH_CROSSWORD':
      console.log(action.payload);
      return action.payload

    default:
      return state
  }
}

// state = [
//   { boxId: "1", type: 'empty numbered', key: 'M', value: '' },
//   { boxId: "2", type: 'empty', key: 'A', value: '' },
//   { boxId: "3", type: 'empty', key: 'I', value: '' },
//   { boxId: "4", type: 'empty', key: 'N', value: '' },
//   { boxId: "5", type: 'empty', key: 'E', value: '' },
//   { boxId: "6", type: 'filled', key: '', value: '' },
//   { boxId: "7", type: 'filled', key: '', value: '' },
//   { boxId: "8", type: 'filled', key: '', value: '' },
//   { boxId: "9", type: 'filled', key: '', value: '' },
//   { boxId: "10", type: 'filled', key: '', value: '' },
//   { boxId: "11", type: 'filled', key: '', value: '' },
//   { boxId: "12", type: 'filled', key: '', value: '' },
//   { boxId: "13", type: 'empty numbered', key: 'O', value: '' },
//   { boxId: "14", type: 'empty', key: 'R', value: '' },
//   { boxId: "15", type: 'empty', key: 'E', value: '' },
//   { boxId: "16", type: 'empty numbered', key: 'W', value: '' },
//   { boxId: "17", type: 'empty', key: 'A', value: '' },
//   { boxId: "18", type: 'empty', key: 'X', value: '' },
//   { boxId: "19", type: 'filled', key: '', value: '' },
//   { boxId: "20", type: 'filled', key: '', value: '' },
//   { boxId: "21", type: 'filled', key: '', value: '' },
//   { boxId: "22", type: 'filled', key: '', value: '' },
//   { boxId: "23", type: 'filled', key: '', value: '' },
//   { boxId: "24", type: 'empty numbered', key: 'G', value: '' },
//   { boxId: "25", type: 'empty', key: 'R', value: '' },
//   { boxId: "26", type: 'empty', key: 'U', value: '' },
//   { boxId: "27", type: 'empty', key: 'F', value: '' },
//   { boxId: "28", type: 'empty', key: 'F', value: '' },
//   { boxId: "29", type: 'filled', key: '', value: '' },
//   { boxId: "30", type: 'filled', key: '', value: '' },
//   { boxId: "31", type: 'filled', key: '', value: '' },
//   { boxId: "32", type: 'filled', key: '', value: '' },
//   { boxId: "33", type: 'filled', key: '', value: '' },
//   { boxId: "34", type: 'filled', key: '', value: '' },
//   { boxId: "35", type: 'filled', key: '', value: '' },
//   { boxId: "36", type: 'empty numbered', key: 'S', value: '' },
//   { boxId: "37", type: 'empty', key: 'M', value: '' },
//   { boxId: "38", type: 'empty', key: 'I', value: '' },
//   { boxId: "39", type: 'empty', key: 'R', value: '' },
//   { boxId: "40", type: 'empty', key: 'N', value: '' },
//   { boxId: "41", type: 'empty', key: 'O', value: '' },
//   { boxId: "42", type: 'empty', key: 'F', value: '' },
//   { boxId: "43", type: 'empty', key: 'F', value: '' },
//   { boxId: "44", type: 'filled', key: '', value: '' },
//   { boxId: "45", type: 'filled', key: '', value: '' },
//   { boxId: "46", type: 'filled', key: '', value: '' },
//   { boxId: "47", type: 'filled', key: '', value: '' },
//   { boxId: "48", type: 'empty numbered', key: 'D', value: '' },
//   { boxId: "49", type: 'empty', key: 'U', value: '' },
//   { boxId: "50", type: 'empty', key: 'M', value: '' },
//   { boxId: "51", type: 'empty', key: 'M', value: '' },
//   { boxId: "52", type: 'empty', key: 'Y', value: '' },
//   { boxId: "53", type: 'filled', key: '', value: '' },
//   { boxId: "54", type: 'filled', key: '', value: '' },
//   { boxId: "55", type: 'filled', key: '', value: '' },
//   { boxId: "56", type: 'filled', key: '', value: '' },
//   { boxId: "57", type: 'filled', key: '', value: '' },
//   { boxId: "58", type: 'filled', key: '', value: '' },
//   { boxId: "59", type: 'filled', key: '', value: '' },
//   { boxId: "60", type: 'empty numbered', key: 'D', value: '' },
//   { boxId: "61", type: 'filled', key: '', value: '' },
//   { boxId: "62", type: 'filled', key: '', value: '' },
//   { boxId: "63", type: 'filled', key: '', value: '' },
//   { boxId: "64", type: 'filled', key: '', value: '' },
//   { boxId: "65", type: 'filled', key: '', value: '' },
//   { boxId: "66", type: 'empty', key: 'E', value: '' },
//   { boxId: "67", type: 'filled', key: '', value: '' },
//   { boxId: "68", type: 'filled', key: '', value: '' },
//   { boxId: "69", type: 'empty numbered', key: 'J', value: '' },
//   { boxId: "70", type: 'filled', key: '', value: '' },
//   { boxId: "71", type: 'empty numbered', key: 'M', value: '' },
//   { boxId: "72", type: 'empty', key: 'A', value: '' },
//   { boxId: "73", type: 'empty', key: 'O', value: '' },
//   { boxId: "74", type: 'empty', key: 'R', value: '' },
//   { boxId: "75", type: 'empty', key: 'I', value: '' },
//   { boxId: "76", type: 'filled', key: '', value: '' },
//   { boxId: "77", type: 'empty numbered', key: 'A', value: '' },
//   { boxId: "78", type: 'empty', key: 'N', value: '' },
//   { boxId: "79", type: 'empty', key: 'G', value: '' },
//   { boxId: "80", type: 'empty', key: 'E', value: '' },
//   { boxId: "81", type: 'empty', key: 'L', value: '' },
//   { boxId: "82", type: 'empty', key: 'I', value: '' },
//   { boxId: "83", type: 'empty', key: 'C', value: '' },
//   { boxId: "84", type: 'empty', key: 'A', value: '' },
//   { boxId: "85", type: 'filled', key: '', value: '' },
//   { boxId: "86", type: 'filled', key: '', value: '' },
//   { boxId: "87", type: 'filled', key: '', value: '' },
//   { boxId: "88", type: 'filled', key: '', value: '' },
//   { boxId: "89", type: 'filled', key: '', value: '' },
//   { boxId: "90", type: 'empty', key: 'G', value: '' },
//   { boxId: "91", type: 'filled', key: '', value: '' },
//   { boxId: "92", type: 'filled', key: '', value: '' },
//   { boxId: "93", type: 'filled', key: '', value: '' },
//   { boxId: "94", type: 'filled', key: '', value: '' },
//   { boxId: "95", type: 'filled', key: '', value: '' },
//   { boxId: "96", type: 'empty', key: 'L', value: '' },
//   { boxId: "97", type: 'filled', key: '', value: '' },
//   { boxId: "98", type: 'filled', key: '', value: '' },
//   { boxId: "99", type: 'empty', key: 'W', value: '' },
//   { boxId: "100", type: 'filled', key: '', value: '' },
//   { boxId: "101", type: 'filled', key: '', value: '' },
//   { boxId: "102", type: 'filled', key: '', value: '' },
//   { boxId: "103", type: 'empty numbered', key: 'A', value: '' },
//   { boxId: "104", type: 'empty', key: 'H', value: '' },
//   { boxId: "105", type: 'empty', key: 'I', value: '' },
//   { boxId: "106", type: 'filled', key: '', value: '' },
//   { boxId: "107", type: 'filled', key: '', value: '' },
//   { boxId: "108", type: 'filled', key: '', value: '' },
//   { boxId: "109", type: 'filled', key: '', value: '' },
//   { boxId: "110", type: 'filled', key: '', value: '' },
//   { boxId: "111", type: 'filled', key: '', value: '' },
//   { boxId: "112", type: 'filled', key: '', value: '' },
//   { boxId: "113", type: 'filled', key: '', value: '' },
//   { boxId: "114", type: 'filled', key: '', value: '' },
//   { boxId: "115", type: 'filled', key: '', value: '' },
//   { boxId: "116", type: 'empty numbered', key: 'V', value: '' },
//   { boxId: "117", type: 'empty', key: 'A', value: '' },
//   { boxId: "118", type: 'empty', key: 'U', value: '' },
//   { boxId: "119", type: 'empty', key: 'L', value: '' },
//   { boxId: "120", type: 'empty', key: 'T', value: '' }
// ]
