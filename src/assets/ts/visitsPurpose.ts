enum VisitPurpose {
  LashesNew = 'NEW',
  LashesRemove = 'REMOVE',
  LashesAppend = 'APPEND',
}

export const visitPurposes = [
  {
    value: VisitPurpose.LashesNew,
    'pl-PL': 'Nowa aplikacja'
  },
  {
    value: VisitPurpose.LashesRemove,
    'pl-PL': 'Usunięcie rzęs'
  },
  {
    value: VisitPurpose.LashesAppend,
    'pl-PL': 'Uzupełnienie rzęs'
  }
]
