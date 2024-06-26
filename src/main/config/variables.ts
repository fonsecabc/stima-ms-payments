export const variables = {
  apiKey: process.env.API_KEY ?? 'undefined',
  paymentProcessorApiUrl: process.env.PAYMENT_PROCESSOR_API_URL ?? 'undefined',
  paymentProcessorApiKey: process.env.PAYMENT_PROCESSOR_API_KEY ?? 'undefined',
  firebaseAdminSdk: process.env.CONFIG_FIREBASE_ADMIN_SDK ?? 'undefined',
  monthlySubscriptionId: process.env.MONTHLY_SUBSCRIPTION_ID ?? 'undefined',
  yearlySubscriptionId: process.env.YEARLY_SUBSCRIPTION_ID ?? 'undefined',
  nutritionalRoutineValue: Number(process.env.NUTRITIONAL_ROUTINE_VALUE) ?? 'undefined',
  nutritionalRoutineSplitValue: Number(process.env.NUTRITIONAL_ROUTINE_SPLIT_VALUE) ?? 'undefined',
  nutritionalRoutineSplitRecipientUid: process.env.NUTRITIONAL_ROUTINE_SPLIT_RECIPIENT_UID ?? 'undefined',
  jwtSecret: process.env.JWT_SECRET ?? 'undefined',
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined')
  })
}
