import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Built-in java.math.BigDecimal */
  My3BigDecimal: any;
  /** Built-in scalar representing a local date */
  My3LocalDate: any;
  /** Long type */
  My3Long: any;
  /** Unrepresentable type */
  My3UNREPRESENTABLE: any;
  /** Url class that should have format: scheme://prefix.domain:port/path/filename for example: https://www.example.com */
  My3URL: any;
  /** Can be anything */
  Any: any;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated Use installedAddons under subscription instead */
  my3InstalledAddons?: Maybe<Array<Maybe<My3Addons>>>;
  my3MarketingCloudInfo?: Maybe<My3MarketingCloudInfoResponse>;
  my3Subscription?: Maybe<Subscription>;
  my3CustomerConsents: My3CustomerConsents;
  my3InvoiceHistory: My3InvoiceHistory;
  /** @deprecated Use buyableAddons under subscription instead */
  my3BuyableAddons?: Maybe<Array<Maybe<My3Addons>>>;
  my3PaymentOptions: Array<Maybe<My3PaymentOptions>>;
  my3UserSession?: Maybe<My3UserSession>;
  my3SpendLimitMetaData?: Maybe<My3SpendLimitMetaData>;
  /** No input returns non shared subscriptions */
  my3Services: My3services;
  /** High performance query to get all isids */
  my3SubscriptionIds: Array<Maybe<Scalars['String']>>;
  /** @deprecated Use availableTopups under subscription instead */
  my3GetAvailableTopups?: Maybe<My3Topups>;
  /** ONLY FOR DEV: Mock query error */
  my3ThrowQueryError?: Maybe<Scalars['String']>;
  my3Invoice?: Maybe<My3Invoice>;
  my3Accounts: Array<Maybe<My3Account>>;
  /** All type of errors. Can be located in error -> extensions -> code */
  my3Errors?: Maybe<Array<Maybe<My3ErrorType>>>;
  my3Account: My3Account;
  dummy?: Maybe<Scalars['String']>;
  compisMaintenance?: Maybe<MaintenanceStatus>;
  compisCompanionEligibility?: Maybe<CompisEligibility>;
  compisSubscriptionStatus?: Maybe<CompisSubscriptionStatus>;
  compisCompanionDecodeJwt?: Maybe<CompisDecodedJwt>;
  compisCompanionManageurl?: Maybe<CompisUrlResponse>;
  compisCompanionSignupurl?: Maybe<CompisUrlResponse>;
  webshopDeviceProducts?: Maybe<WebshopDeviceProductsResponse>;
  webshopPopularProducts?: Maybe<WebshopPopular>;
  webshopPromotionProducts?: Maybe<WebshopPromotions>;
  webshopDevices?: Maybe<WebshopDevicesResponse>;
  webshopDevice?: Maybe<WebshopDeviceResponse>;
  webshopDeviceBundles?: Maybe<WebshopDeviceBundlesResponse>;
  webshopDeviceDetails?: Maybe<WebshopDeviceDetailsResponse>;
  webshopPricePlans?: Maybe<WebshopPricePlansResponse>;
  webshopCheckoutRows?: Maybe<WebshopCheckoutRowsResponse>;
  webshopNumberProlonging?: Maybe<WebshopNumberProlongingResponse>;
  webshopProlongable?: Maybe<WebshopNumberProlongingResponse>;
  contentPage?: Maybe<ContentPage>;
  contentPages?: Maybe<Array<Maybe<ContentPage>>>;
  contentHeader?: Maybe<ContentHeader>;
  contentFooter?: Maybe<ContentFooter>;
  contentShortlinks?: Maybe<Array<Maybe<ContentShortLink>>>;
  chatIsOpen?: Maybe<Scalars['Boolean']>;
  chatIsTransferred?: Maybe<Scalars['Boolean']>;
  chatGetDisconnectedAgentName?: Maybe<Scalars['String']>;
};

export type QueryMy3InstalledAddonsArgs = {
  imageWidth?: Maybe<Scalars['Int']>;
  subscriptionId: Scalars['String'];
};

export type QueryMy3SubscriptionArgs = {
  subscriptionId: Scalars['String'];
};

export type QueryMy3InvoiceHistoryArgs = {
  fromDate?: Maybe<Scalars['String']>;
  excludeInvalidInvoices?: Maybe<Scalars['Boolean']>;
  toDate?: Maybe<Scalars['String']>;
};

export type QueryMy3BuyableAddonsArgs = {
  imageWidth?: Maybe<Scalars['Int']>;
  subscriptionId: Scalars['String'];
};

export type QueryMy3PaymentOptionsArgs = {
  orderBy?: Maybe<My3PaymentOptionsByInput>;
};

export type QueryMy3UserSessionArgs = {
  id?: Maybe<Scalars['String']>;
};

export type QueryMy3SpendLimitMetaDataArgs = {
  spendLimitType: My3SpendLimitType;
};

export type QueryMy3ServicesArgs = {
  filter?: Maybe<My3SubscriptionsFilter>;
};

export type QueryMy3GetAvailableTopupsArgs = {
  roaming: My3Roaming;
  subscriptionId: Scalars['String'];
};

export type QueryMy3ThrowQueryErrorArgs = {
  optionalText?: Maybe<Scalars['String']>;
  optionalErrorType?: Maybe<My3ErrorType>;
};

export type QueryMy3InvoiceArgs = {
  fromDate?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type QueryMy3AccountsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  filterInvalidAccounts?: Maybe<Scalars['Boolean']>;
};

export type QueryMy3AccountArgs = {
  accountNumber: Scalars['String'];
  filterInvalidAccounts?: Maybe<Scalars['Boolean']>;
};

export type QueryCompisCompanionEligibilityArgs = {
  msisdn?: Maybe<Scalars['String']>;
};

export type QueryCompisSubscriptionStatusArgs = {
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type QueryCompisCompanionDecodeJwtArgs = {
  jwt?: Maybe<Scalars['String']>;
};

export type QueryCompisCompanionManageurlArgs = {
  boId?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  primaryIccid?: Maybe<Scalars['String']>;
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerType?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  imei?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  deviceCustomName?: Maybe<Scalars['String']>;
};

export type QueryCompisCompanionSignupurlArgs = {
  boId?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  primaryIccid?: Maybe<Scalars['String']>;
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerType?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  deviceCustomName?: Maybe<Scalars['String']>;
};

export type QueryWebshopDeviceProductsArgs = {
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopDevicesArgs = {
  deviceType: DeviceTypes;
  customerType: CustomerTypes;
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopDeviceArgs = {
  id?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
  deviceType: DeviceTypes;
  customerType: CustomerTypes;
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopDeviceBundlesArgs = {
  id?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
  deviceType: DeviceTypes;
  customerType: CustomerTypes;
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopDeviceDetailsArgs = {
  id?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopPricePlansArgs = {
  pricePlanType: PricePlanTypes;
  customerType: CustomerTypes;
};

export type QueryWebshopCheckoutRowsArgs = {
  ids?: Maybe<Array<Maybe<WebshopCheckoutRowInput>>>;
  campaignToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopNumberProlongingArgs = {
  number: Scalars['String'];
  recaptchaToken?: Maybe<Scalars['String']>;
};

export type QueryWebshopProlongableArgs = {
  msisdn: Scalars['String'];
  customerType: CustomerTypes;
  prolongType: ProlongTypes;
  subscriptionType: SubscriptionTypes;
  recaptchaToken?: Maybe<Scalars['String']>;
};

export type QueryContentPageArgs = {
  language?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  forDate?: Maybe<Scalars['Int']>;
};

export type QueryContentPagesArgs = {
  language?: Maybe<Scalars['String']>;
  forDate?: Maybe<Scalars['Int']>;
};

export type QueryContentHeaderArgs = {
  language?: Maybe<Scalars['String']>;
  type?: Maybe<ContentContextType>;
};

export type QueryContentFooterArgs = {
  language?: Maybe<Scalars['String']>;
  type?: Maybe<ContentContextType>;
};

export type QueryContentShortlinksArgs = {
  language?: Maybe<Scalars['String']>;
};

export type QueryChatIsOpenArgs = {
  scheduleGroupId?: Maybe<Scalars['String']>;
  utcTimeString?: Maybe<Scalars['String']>;
};

export type QueryChatIsTransferredArgs = {
  conversationId?: Maybe<Scalars['String']>;
  agentMemberId?: Maybe<Scalars['String']>;
};

export type QueryChatGetDisconnectedAgentNameArgs = {
  conversationId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  my3UpdateSubscriptionName?: Maybe<My3OrderConfirmation>;
  my3RemoveSpendLimitSetting?: Maybe<My3OrderConfirmation>;
  my3UpdateSubscriptionConsents: My3UpdateConsents;
  my3PauseSpendLimitSetting?: Maybe<My3SpendLimitSetting>;
  my3CreateSpendLimitSetting?: Maybe<My3SpendLimitSetting>;
  my3RemoveAddon: My3AddonChange;
  my3UpdateSatelliteRoamingSetting?: Maybe<My3OrderConfirmation>;
  my3UpdateMsisdnVisibility?: Maybe<My3OrderConfirmation>;
  my3UpdatePublicListing?: Maybe<My3OrderConfirmation>;
  my3PurchaseTopup: My3PurchaseTopup;
  my3PurchaseAddon: My3AddonChange;
  my3SignAutogiro?: Maybe<My3signAutogiroLink>;
  my3UpdateSpendLimitSetting?: Maybe<My3SpendLimitSetting>;
  /** Depends on usimType response type might be OrderEsim or OrderTrioSim */
  my3OrderUsim?: Maybe<My3OrderUsim>;
  /** ONLY FOR DEV: Mock mutation error */
  my3ThrowMutationError?: Maybe<Scalars['String']>;
  my3UpdateCustomerConsents: My3UpdateConsents;
  my3ChangeTariff?: Maybe<My3ChangeTariff>;
  my3ActivateUsim?: Maybe<My3OrderConfirmation>;
  logout?: Maybe<LogOutResponse>;
  compisCompanionActivation?: Maybe<CompisActivationResponse>;
  compisCompanionDeactivation?: Maybe<CompisDeactivationResponse>;
  compisCompanionReplacement?: Maybe<CompisReplacementResponse>;
  chatSignData?: Maybe<ChatSignedDataResponse>;
  chatStartConversation?: Maybe<ChatStartConversationResponse>;
  chatSendMessage?: Maybe<ChatSendMessageResponse>;
  chatSendTypingIndicator?: Maybe<ChatTypingIndicatorResponse>;
  chatEndConversation?: Maybe<Scalars['String']>;
  chatGetMember?: Maybe<ChatMemberResponse>;
  chatGetMessagesFromStoredChat?: Maybe<ChatMessagesFromStoredChatResponse>;
};

export type MutationMy3UpdateSubscriptionNameArgs = {
  updateSubscriptionName: My3UpdateSubscriptionNameInput;
};

export type MutationMy3RemoveSpendLimitSettingArgs = {
  isid: Scalars['String'];
};

export type MutationMy3UpdateSubscriptionConsentsArgs = {
  isid: Scalars['String'];
  updateConsents: Array<Maybe<My3UpdateConsentInput>>;
};

export type MutationMy3PauseSpendLimitSettingArgs = {
  isid: Scalars['String'];
  spendLimitType: My3SpendLimitType;
};

export type MutationMy3CreateSpendLimitSettingArgs = {
  isid: Scalars['String'];
  hardLimit: Scalars['Int'];
};

export type MutationMy3RemoveAddonArgs = {
  productId: Scalars['String'];
  subscriptionId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};

export type MutationMy3UpdateSatelliteRoamingSettingArgs = {
  isid: Scalars['String'];
  settingValue: My3SatelliteRoamingSettingValue;
};

export type MutationMy3UpdateMsisdnVisibilityArgs = {
  isid: Scalars['String'];
  msisdnVisibility: My3MsisdnVisibility;
};

export type MutationMy3UpdatePublicListingArgs = {
  isid: Scalars['String'];
  publicListing: My3PublicListing;
};

export type MutationMy3PurchaseTopupArgs = {
  topupId: Scalars['String'];
  subscriptionId: Scalars['String'];
};

export type MutationMy3PurchaseAddonArgs = {
  productId: Scalars['String'];
  subscriptionId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
};

export type MutationMy3SignAutogiroArgs = {
  signingAutogiroRequest: My3signingAutogiroRequestInput;
};

export type MutationMy3UpdateSpendLimitSettingArgs = {
  isid: Scalars['String'];
  hardLimit: Scalars['Int'];
  spendLimitType: My3SpendLimitType;
};

export type MutationMy3OrderUsimArgs = {
  isid: Scalars['String'];
  usimType: Scalars['String'];
};

export type MutationMy3ThrowMutationErrorArgs = {
  optionalText?: Maybe<Scalars['String']>;
  optionalErrorType?: Maybe<My3ErrorType>;
};

export type MutationMy3UpdateCustomerConsentsArgs = {
  updateConsents: Array<Maybe<My3UpdateConsentInput>>;
};

export type MutationMy3ChangeTariffArgs = {
  tariffId: Scalars['String'];
  subscriptionId: Scalars['String'];
};

export type MutationMy3ActivateUsimArgs = {
  uiccid: Scalars['String'];
  isid: Scalars['String'];
};

export type MutationCompisCompanionActivationArgs = {
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  hardwareName?: Maybe<Scalars['String']>;
  imei?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type MutationCompisCompanionDeactivationArgs = {
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type MutationCompisCompanionReplacementArgs = {
  msisdn?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  hardwareName?: Maybe<Scalars['String']>;
  imei?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export type MutationChatSignDataArgs = {
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  isMobile?: Maybe<Scalars['Boolean']>;
  purecloudRouteTo?: Maybe<Scalars['String']>;
};

export type MutationChatStartConversationArgs = {
  displayName?: Maybe<Scalars['String']>;
  recaptchaResponse?: Maybe<Scalars['String']>;
  signedDataJwt?: Maybe<Scalars['String']>;
};

export type MutationChatSendMessageArgs = {
  conversationId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type MutationChatSendTypingIndicatorArgs = {
  conversationId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};

export type MutationChatEndConversationArgs = {
  conversationId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};

export type MutationChatGetMemberArgs = {
  conversationId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};

export type MutationChatGetMessagesFromStoredChatArgs = {
  conversationId?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  accountName: Scalars['String'];
  accountNumber: Scalars['String'];
  availableTopups: My3Topups;
  availableUsimProducts?: Maybe<Array<Maybe<My3UsimProduct>>>;
  binding?: Maybe<My3Binding>;
  buyableAddons: Array<Maybe<My3Addons>>;
  campaignUsps: Array<Maybe<My3CampaignSurfInformation>>;
  changeableTariffs?: Maybe<My3ChangeableTariffs>;
  dataRoamingSpendLimit?: Maybe<My3SpendLimitSetting>;
  displayName?: Maybe<Scalars['String']>;
  endUser?: Maybe<My3EndUser>;
  /** Details for extra cost in current month */
  extraCostDetails?: Maybe<My3ExtraCostWithDetails>;
  freeUnits?: Maybe<My3FreeUnits>;
  id: Scalars['String'];
  installedAddons: Array<Maybe<My3Addons>>;
  isValidForTariffChange: My3ValidForChange;
  lastUsedDevice?: Maybe<My3Device>;
  msisdn: Scalars['String'];
  msisdnVisibility?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  noticePeriod?: Maybe<My3NoticePeriod>;
  paymentOption: My3PaymentOption;
  prolongable: Scalars['Boolean'];
  /** @deprecated change to prolongableFromDateTime */
  prolongableFrom?: Maybe<Scalars['String']>;
  prolongableFromDateTime?: Maybe<My3DateTime>;
  publicListing?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  /** @deprecated use refillDateTime */
  refillDate?: Maybe<My3UntilRefill>;
  refillDateTime?: Maybe<My3DateTime>;
  satelliteRoamingSetting?: Maybe<My3SatelliteRoamingSetting>;
  sharedData?: Maybe<My3SharedData>;
  /** @deprecated Use sharedData.sharesWith */
  sharesWith?: Maybe<Scalars['Int']>;
  simInfo: My3SimInfo;
  status: My3SubscriptionStatus;
  subscriptionConsents: My3CustomerConsents;
  tariff?: Maybe<My3Tariff>;
  totalSpendLimit?: Maybe<My3SpendLimitSetting>;
  uiccid?: Maybe<Scalars['String']>;
  usage: My3Usage;
};

export type SubscriptionAvailableTopupsArgs = {
  roaming: My3Roaming;
};

export type SubscriptionBuyableAddonsArgs = {
  imageWidth?: Maybe<Scalars['Int']>;
};

export type SubscriptionFreeUnitsArgs = {
  dateTime?: Maybe<Scalars['String']>;
};

export type SubscriptionInstalledAddonsArgs = {
  imageWidth?: Maybe<Scalars['Int']>;
};

export type SubscriptionUsageArgs = {
  month?: Maybe<Scalars['String']>;
  cursorPagination?: Maybe<My3CursorPaginationInput>;
  usageType?: Maybe<My3UsageType>;
};

export type My3Account = {
  __typename?: 'My3Account';
  accountNodeType: Scalars['String'];
  hasThreeSplit: Scalars['Boolean'];
  hasThreeSwitch: Scalars['Boolean'];
  invoiceHistory?: Maybe<My3InvoiceHistory>;
  name: Scalars['String'];
  number: Scalars['String'];
  /** No input returns non shared subscriptions */
  services: My3services;
  status: My3AccountStatus;
  type: My3PaymentOption;
};

export type My3AccountInvoiceHistoryArgs = {
  fromDate?: Maybe<Scalars['String']>;
  toDate?: Maybe<Scalars['String']>;
};

export type My3AccountServicesArgs = {
  filter?: Maybe<My3SubscriptionsFilter>;
};

export enum My3AccountStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Pending = 'PENDING',
  Quarantined = 'QUARANTINED',
}

export enum My3Action {
  Add = 'ADD',
  Remove = 'REMOVE',
}

export type My3AddonChange = {
  __typename?: 'My3AddonChange';
  /** @deprecated change to changeDateTime */
  changeDateInEpoch?: Maybe<Scalars['String']>;
  changeDateTime?: Maybe<My3DateTime>;
  changeType?: Maybe<My3ChangeTypeResponse>;
  changes?: Maybe<Array<Maybe<My3Change>>>;
  status?: Maybe<My3OperationStatus>;
};

export enum My3AddonStatus {
  Installed = 'INSTALLED',
  NotInstalled = 'NOT_INSTALLED',
  PendingInstall = 'PENDING_INSTALL',
  PendingRemove = 'PENDING_REMOVE',
}

export type My3Addons = {
  __typename?: 'My3Addons';
  description?: Maybe<Scalars['String']>;
  descriptionCancel?: Maybe<Scalars['String']>;
  descriptionShort?: Maybe<Scalars['String']>;
  discount?: Maybe<My3Discount>;
  emailRequired: Scalars['Boolean'];
  /** @deprecated change to futureDateTime */
  futureDate?: Maybe<Scalars['String']>;
  futureDateTime?: Maybe<My3DateTime>;
  iconUrl: Scalars['String'];
  id: Scalars['String'];
  /** @deprecated change to installedDateTime */
  installedDate?: Maybe<Scalars['String']>;
  installedDateTime?: Maybe<My3DateTime>;
  name: Scalars['String'];
  noticePeriod?: Maybe<Scalars['Int']>;
  price: Scalars['String'];
  pricePeriod?: Maybe<Scalars['String']>;
  status: My3AddonStatus;
};

export enum My3AuthMethod {
  BankId = 'BANK_ID',
  NemId = 'NEM_ID',
  Password = 'PASSWORD',
}

export enum My3BillMedia {
  Csvcom1 = 'CSVCOM1',
  Csvcom2 = 'CSVCOM2',
  Datcom = 'DATCOM',
  ElectronicInvoice = 'ELECTRONIC_INVOICE',
  Paper = 'PAPER',
  Sms = 'SMS',
  SveInvoice = 'SVE_INVOICE',
}

export type My3Binding = {
  __typename?: 'My3Binding';
  datePassed: Scalars['Boolean'];
  /** @deprecated change to endDateTime */
  endDate?: Maybe<Scalars['String']>;
  endDateTime?: Maybe<My3DateTime>;
};

export type My3BoId = {
  __typename?: 'My3BoId';
  boid?: Maybe<Scalars['String']>;
};

export type My3BuyableTopups = {
  __typename?: 'My3BuyableTopups';
  amount: Scalars['String'];
  amountUnit: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label: Scalars['String'];
  price: Scalars['String'];
};

export type My3CampaignSurfInformation = {
  __typename?: 'My3CampaignSurfInformation';
  usp: Scalars['String'];
  /** @deprecated Use validityEndDateTime instead */
  validityEndDate?: Maybe<Scalars['String']>;
  validityEndDateTime: My3DateTime;
};

export enum My3CategoryCode {
  Data = 'DATA',
  Mms = 'MMS',
  Sms = 'SMS',
  Smsmms = 'SMSMMS',
  Voice = 'VOICE',
}

export type My3Change = {
  __typename?: 'My3Change';
  action?: Maybe<My3Action>;
  externalLabel?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
};

export enum My3ChangeAction {
  Add = 'ADD',
  Remove = 'REMOVE',
}

export type My3ChangeTariff = {
  __typename?: 'My3ChangeTariff';
  accountChanges?: Maybe<Array<Maybe<My3TariffChange>>>;
  changes: Array<Maybe<My3ChangeTariffChange>>;
  executionDate: Scalars['String'];
  transactionId: Scalars['String'];
};

export type My3ChangeTariffChange = {
  __typename?: 'My3ChangeTariffChange';
  description: Scalars['String'];
  discount?: Maybe<My3TariffDiscount>;
  label: Scalars['String'];
  productId: Scalars['String'];
  recurringPrice?: Maybe<Scalars['Float']>;
};

export enum My3ChangeTypeResponse {
  Downgrade = 'DOWNGRADE',
  Upgrade = 'UPGRADE',
}

export type My3ChangeableTariff = {
  __typename?: 'My3ChangeableTariff';
  accountChanges?: Maybe<Array<Maybe<My3TariffChange>>>;
  calls: My3TariffUnit;
  data: My3TariffUnit;
  description: Scalars['String'];
  discount?: Maybe<My3TariffDiscount>;
  /** @deprecated change to executionDateTime */
  executionDate?: Maybe<Scalars['String']>;
  executionDateTime?: Maybe<My3DateTime>;
  label?: Maybe<Scalars['String']>;
  messages: My3TariffUnit;
  productId: Scalars['String'];
  recurringPrice: Scalars['Float'];
  tariffChanges?: Maybe<Array<Maybe<My3TariffChange>>>;
  tariffRecommendation?: Maybe<My3TariffRecommendation>;
  threeWorld: Scalars['Boolean'];
};

export type My3ChangeableTariffs = {
  __typename?: 'My3ChangeableTariffs';
  changeableTariffs?: Maybe<Array<Maybe<My3ChangeableTariff>>>;
  currentTariff?: Maybe<My3ChangeableTariff>;
};

export type My3Consent = {
  __typename?: 'My3Consent';
  accepted: Scalars['Boolean'];
  category: Scalars['String'];
  childConsents: Array<Maybe<My3Consent>>;
  collected: Scalars['Boolean'];
  consentId: Scalars['String'];
  consentText?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  lastUpdatedSystem?: Maybe<Scalars['String']>;
  priority: Scalars['Int'];
  startDate?: Maybe<Scalars['String']>;
};

export enum My3Country {
  Denmark = 'DENMARK',
  Sweden = 'SWEDEN',
}

export type My3CursorPagination = {
  __typename?: 'My3CursorPagination';
  cursor: Scalars['String'];
};

export type My3CursorPaginationInput = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type My3CustomerConsents = {
  __typename?: 'My3CustomerConsents';
  consents: Array<Maybe<My3Consent>>;
};

export enum My3CustomerSize {
  Large = 'LARGE',
  Small = 'SMALL',
}

export enum My3CustomerType {
  Business = 'BUSINESS',
  Consumer = 'CONSUMER',
}

export type My3DataEvent = {
  __typename?: 'My3DataEvent';
  absoluteUnit: Scalars['My3Long'];
  amount: Scalars['My3BigDecimal'];
  amountUnit: Scalars['String'];
  cost: Scalars['My3BigDecimal'];
  /** @deprecated change to dateTime */
  dateInEpoch: Scalars['String'];
  dateTime: My3DateTime;
  description: Scalars['String'];
  eventId: Scalars['String'];
  invoiceLabel: Scalars['String'];
  roamingInformation?: Maybe<My3RoamingInformation>;
};

export type My3DataUsage = {
  __typename?: 'My3DataUsage';
  dataEvents: Array<Maybe<My3DataEvent>>;
  totalCost: Scalars['My3BigDecimal'];
  totalUsageAmount: Scalars['My3BigDecimal'];
  totalUsageUnit: Scalars['String'];
};

export type My3DateTime = {
  __typename?: 'My3DateTime';
  epoch?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type My3Device = {
  __typename?: 'My3Device';
  deviceType: Scalars['String'];
  imei: Scalars['String'];
  productId: Scalars['String'];
  productName: Scalars['String'];
};

export type My3Discount = {
  __typename?: 'My3Discount';
  discountAmount?: Maybe<Scalars['String']>;
  /** @deprecated change to discountEndDateTime */
  discountEndDate?: Maybe<Scalars['String']>;
  discountEndDateTime?: Maybe<My3DateTime>;
  discountPercentage?: Maybe<Scalars['Float']>;
  discountPriceRecurring?: Maybe<Scalars['String']>;
};

export type My3EndUser = {
  __typename?: 'My3EndUser';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export enum My3ErrorType {
  AccountInvalidError = 'ACCOUNT_INVALID_ERROR',
  AddonEmailAlreadyRegistered = 'ADDON_EMAIL_ALREADY_REGISTERED',
  AddonInvalidEmail = 'ADDON_INVALID_EMAIL',
  AddonPendingSubscriptionChange = 'ADDON_PENDING_SUBSCRIPTION_CHANGE',
  AddonPendingTariffChange = 'ADDON_PENDING_TARIFF_CHANGE',
  AddonProductAlreadyInstalled = 'ADDON_PRODUCT_ALREADY_INSTALLED',
  AddonProductPendingActivation = 'ADDON_PRODUCT_PENDING_ACTIVATION',
  AddonProductPendingDeactivation = 'ADDON_PRODUCT_PENDING_DEACTIVATION',
  AddonUnknownError = 'ADDON_UNKNOWN_ERROR',
  BillingCouldNotFindServiceDetailsForInput = 'BILLING_COULD_NOT_FIND_SERVICE_DETAILS_FOR_INPUT',
  BillingNoActiveBillPeriod = 'BILLING_NO_ACTIVE_BILL_PERIOD',
  ChangeableTariffsBlockingOrders = 'CHANGEABLE_TARIFFS_BLOCKING_ORDERS',
  ChangeableTariffsInvalidSubscription = 'CHANGEABLE_TARIFFS_INVALID_SUBSCRIPTION',
  ChangeableTariffsUnknownError = 'CHANGEABLE_TARIFFS_UNKNOWN_ERROR',
  ChangeTariffActivationError = 'CHANGE_TARIFF_ACTIVATION_ERROR',
  ChangeTariffUnknownError = 'CHANGE_TARIFF_UNKNOWN_ERROR',
  ConsentBifNotResponding = 'CONSENT_BIF_NOT_RESPONDING',
  ConsentCustomerDetailsNotFound = 'CONSENT_CUSTOMER_DETAILS_NOT_FOUND',
  ConsentIsNotValidOrActive = 'CONSENT_IS_NOT_VALID_OR_ACTIVE',
  ConsentNoActiveSubscriptionFound = 'CONSENT_NO_ACTIVE_SUBSCRIPTION_FOUND',
  ConsentSubscriptionNotFoundInPsft = 'CONSENT_SUBSCRIPTION_NOT_FOUND_IN_PSFT',
  ConsentSubsystemNotResponding = 'CONSENT_SUBSYSTEM_NOT_RESPONDING',
  ConsentValidationError = 'CONSENT_VALIDATION_ERROR',
  DataExtensionNotFound = 'DATA_EXTENSION_NOT_FOUND',
  EmptyDataFromPim = 'EMPTY_DATA_FROM_PIM',
  InvoicesNoAccountsAvailable = 'INVOICES_NO_ACCOUNTS_AVAILABLE',
  InvoiceCouldNotBeFound = 'INVOICE_COULD_NOT_BE_FOUND',
  InvoiceDocumentAvailableCouldNotBeFetched = 'INVOICE_DOCUMENT_AVAILABLE_COULD_NOT_BE_FETCHED',
  InvoiceDocumentCouldNotBeFetched = 'INVOICE_DOCUMENT_COULD_NOT_BE_FETCHED',
  InvoiceDocumentNotAvailable = 'INVOICE_DOCUMENT_NOT_AVAILABLE',
  InvoiceNoDocumentAvailable = 'INVOICE_NO_DOCUMENT_AVAILABLE',
  PaginationInputValidationError = 'PAGINATION_INPUT_VALIDATION_ERROR',
  ParseDateValidationError = 'PARSE_DATE_VALIDATION_ERROR',
  PaymentErrorFetchingLink = 'PAYMENT_ERROR_FETCHING_LINK',
  PaymentLinkInputValidationError = 'PAYMENT_LINK_INPUT_VALIDATION_ERROR',
  PaymentMethodAccountIsNotPayable = 'PAYMENT_METHOD_ACCOUNT_IS_NOT_PAYABLE',
  PaymentMethodAccountIsNotPostpaid = 'PAYMENT_METHOD_ACCOUNT_IS_NOT_POSTPAID',
  PaymentMethodAccountIsQuarantineOrClosed = 'PAYMENT_METHOD_ACCOUNT_IS_QUARANTINE_OR_CLOSED',
  PaymentMethodNotSupportedError = 'PAYMENT_METHOD_NOT_SUPPORTED_ERROR',
  PaymentValidationError = 'PAYMENT_VALIDATION_ERROR',
  PrepaidSubscription = 'PREPAID_SUBSCRIPTION',
  RecommendationTariffNotFound = 'RECOMMENDATION_TARIFF_NOT_FOUND',
  RecommendationTariffUnknownError = 'RECOMMENDATION_TARIFF_UNKNOWN_ERROR',
  SettingBadRequest = 'SETTING_BAD_REQUEST',
  SettingCouldNotFindSubscriber = 'SETTING_COULD_NOT_FIND_SUBSCRIBER',
  SettingCreateDataRoamingSpendLimitWithSoftlimitNotAllowed = 'SETTING_CREATE_DATA_ROAMING_SPEND_LIMIT_WITH_SOFTLIMIT_NOT_ALLOWED',
  SettingCsAccountError = 'SETTING_CS_ACCOUNT_ERROR',
  SettingCsActivationError = 'SETTING_CS_ACTIVATION_ERROR',
  SettingCsInternalError = 'SETTING_CS_INTERNAL_ERROR',
  SettingCsServiceUnavailable = 'SETTING_CS_SERVICE_UNAVAILABLE',
  SettingCsSettingNotAvailable = 'SETTING_CS_SETTING_NOT_AVAILABLE',
  SettingCsSettingPendingChange = 'SETTING_CS_SETTING_PENDING_CHANGE',
  SettingCsSubscriptionError = 'SETTING_CS_SUBSCRIPTION_ERROR',
  SettingCsSystemError = 'SETTING_CS_SYSTEM_ERROR',
  SettingForbiddenRequest = 'SETTING_FORBIDDEN_REQUEST',
  SettingInvalidInput = 'SETTING_INVALID_INPUT',
  SettingInvalidLimit = 'SETTING_INVALID_LIMIT',
  SettingMethodNotAllowed = 'SETTING_METHOD_NOT_ALLOWED',
  SettingMsisdnDoesNotBelongToCurrentAccount = 'SETTING_MSISDN_DOES_NOT_BELONG_TO_CURRENT_ACCOUNT',
  SettingMultipleUpdatesPerBillperiodNotAllowed = 'SETTING_MULTIPLE_UPDATES_PER_BILLPERIOD_NOT_ALLOWED',
  SettingNoDataFound = 'SETTING_NO_DATA_FOUND',
  SettingOrderValidationFailed = 'SETTING_ORDER_VALIDATION_FAILED',
  SettingPauseDataRoamingForConsumerIsNotAllowed = 'SETTING_PAUSE_DATA_ROAMING_FOR_CONSUMER_IS_NOT_ALLOWED',
  SettingProductAlreadyActivated = 'SETTING_PRODUCT_ALREADY_ACTIVATED',
  SettingPsftInternalError = 'SETTING_PSFT_INTERNAL_ERROR',
  SettingSigningServiceUnavailable = 'SETTING_SIGNING_SERVICE_UNAVAILABLE',
  SettingSubscriberAlreadyHasAnActiveSpendLimit = 'SETTING_SUBSCRIBER_ALREADY_HAS_AN_ACTIVE_SPEND_LIMIT',
  SettingSubscriberDoesNotHaveAnActiveSpendLimit = 'SETTING_SUBSCRIBER_DOES_NOT_HAVE_AN_ACTIVE_SPEND_LIMIT',
  SettingUnauthorizedAccess = 'SETTING_UNAUTHORIZED_ACCESS',
  SettingUpdateDataRoamingSpendLimitWithSoftLimitNotAllowed = 'SETTING_UPDATE_DATA_ROAMING_SPEND_LIMIT_WITH_SOFT_LIMIT_NOT_ALLOWED',
  SettingValidationError = 'SETTING_VALIDATION_ERROR',
  SettingWrongPauseDate = 'SETTING_WRONG_PAUSE_DATE',
  SettingWrongPsftUser = 'SETTING_WRONG_PSFT_USER',
  SisUnknownError = 'SIS_UNKNOWN_ERROR',
  SmartConnectivityException = 'SMART_CONNECTIVITY_EXCEPTION',
  SmartInternalError = 'SMART_INTERNAL_ERROR',
  SmartSubsystemError = 'SMART_SUBSYSTEM_ERROR',
  SmartSubsystemTimeoutError = 'SMART_SUBSYSTEM_TIMEOUT_ERROR',
  SmartUnauthorizedToPerformOperationError = 'SMART_UNAUTHORIZED_TO_PERFORM_OPERATION_ERROR',
  SubscriptionCouldNotBeFoundInCache = 'SUBSCRIPTION_COULD_NOT_BE_FOUND_IN_CACHE',
  TopupCostControl = 'TOPUP_COST_CONTROL',
  TopupDoublePurchase = 'TOPUP_DOUBLE_PURCHASE',
  TopupSubscriptionBarred = 'TOPUP_SUBSCRIPTION_BARRED',
  TopupUnknownError = 'TOPUP_UNKNOWN_ERROR',
  TopupUnpaidBill = 'TOPUP_UNPAID_BILL',
  UnknownErrorConsentService = 'UNKNOWN_ERROR_CONSENT_SERVICE',
  UnknownErrorCustomerIdentity = 'UNKNOWN_ERROR_CUSTOMER_IDENTITY',
  UnknownErrorInvoiceDocument = 'UNKNOWN_ERROR_INVOICE_DOCUMENT',
  UnknownErrorInvoiceService = 'UNKNOWN_ERROR_INVOICE_SERVICE',
  UnknownErrorPayment = 'UNKNOWN_ERROR_PAYMENT',
  UnknownErrorPimService = 'UNKNOWN_ERROR_PIM_SERVICE',
  UnknownErrorPortfolioService = 'UNKNOWN_ERROR_PORTFOLIO_SERVICE',
  UnknownErrorSetting = 'UNKNOWN_ERROR_SETTING',
  UnknownErrorSmart = 'UNKNOWN_ERROR_SMART',
  UnknownErrorSsg = 'UNKNOWN_ERROR_SSG',
  UnknownErrorTopupService = 'UNKNOWN_ERROR_TOPUP_SERVICE',
  UnknownErrorUsage = 'UNKNOWN_ERROR_USAGE',
  UsageCouldNotBeFoundForInput = 'USAGE_COULD_NOT_BE_FOUND_FOR_INPUT',
  UsageInputValidationError = 'USAGE_INPUT_VALIDATION_ERROR',
  ValidationError = 'VALIDATION_ERROR',
}

export type My3ExtraCost = {
  __typename?: 'My3ExtraCost';
  /** @deprecated change to periodEndDateTime */
  periodEnd: Scalars['String'];
  periodEndDateTime: My3DateTime;
  /** @deprecated change to periodStartDateTime */
  periodStart: Scalars['String'];
  periodStartDateTime: My3DateTime;
  totalCost: Scalars['My3BigDecimal'];
};

/** Event representing one single usage for extra cost */
export type My3ExtraCostEvent = {
  __typename?: 'My3ExtraCostEvent';
  calledFrom: Scalars['String'];
  cost: Scalars['My3BigDecimal'];
  /** @deprecated change to dateTime */
  dateInEpoch: Scalars['String'];
  dateTime: My3DateTime;
  eventId: Scalars['String'];
  invoiceLabel: Scalars['String'];
  label: Scalars['String'];
};

/** Group representing multiple usages together for extra cost */
export type My3ExtraCostGroup = {
  __typename?: 'My3ExtraCostGroup';
  amount: Scalars['String'];
  amountUnit: Scalars['String'];
  cost: Scalars['My3BigDecimal'];
  label: Scalars['String'];
};

/** Details for all usage that makes up the extra cost */
export type My3ExtraCostWithDetails = {
  __typename?: 'My3ExtraCostWithDetails';
  cost: Scalars['My3BigDecimal'];
  extraCostEvents?: Maybe<Array<Maybe<My3ExtraCostEvent>>>;
  /** Groups of extra cost. Only includes voice, data and message costs */
  extraCostGroup: Array<Maybe<My3ExtraCostGroup>>;
  /** @deprecated change to periodEndDateTime */
  periodEnd: Scalars['String'];
  periodEndDateTime: My3DateTime;
  /** @deprecated change to periodStartDateTime */
  periodStart: Scalars['String'];
  periodStartDateTime: My3DateTime;
};

export type My3FreeUnit = {
  __typename?: 'My3FreeUnit';
  category: My3CategoryCode;
  /** AllocationId */
  id?: Maybe<Scalars['Int']>;
  isNational: Scalars['Boolean'];
  isRoaming: Scalars['Boolean'];
  isUnlimited: Scalars['Boolean'];
  /** Example: 3Surfpass Europa */
  name?: Maybe<Scalars['String']>;
  remainingUnitKey?: Maybe<Scalars['String']>;
  remainingValue?: Maybe<Scalars['My3BigDecimal']>;
  shared: Scalars['Boolean'];
  thresholdPassed: Scalars['Boolean'];
  totalUnitKey?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['My3BigDecimal']>;
  /** @deprecated change to validityEndDateTime */
  validityEndDate?: Maybe<Scalars['String']>;
  validityEndDateTime?: Maybe<My3DateTime>;
  /** @deprecated change to validityStartDateTime */
  validityStartDate: Scalars['String'];
  validityStartDateTime?: Maybe<My3DateTime>;
};

export type My3FreeUnitConsumption = {
  __typename?: 'My3FreeUnitConsumption';
  consumedUnitKey: Scalars['String'];
  consumedValue: Scalars['My3BigDecimal'];
  subscription: Subscription;
};

export type My3FreeUnits = {
  __typename?: 'My3FreeUnits';
  dataFreeUnits?: Maybe<Array<Maybe<My3FreeUnit>>>;
  messageFreeUnits?: Maybe<Array<Maybe<My3FreeUnit>>>;
  voiceFreeUnits?: Maybe<Array<Maybe<My3FreeUnit>>>;
};

export type My3Invoice = {
  __typename?: 'My3Invoice';
  accountNumber: Scalars['String'];
  amount: Scalars['My3BigDecimal'];
  currentAmountDue: Scalars['My3BigDecimal'];
  giroNumber?: Maybe<Scalars['String']>;
  invoiceDocument?: Maybe<My3InvoiceDocument>;
  invoiceNumber: Scalars['String'];
  invoiceStatus: My3InvoiceStatus;
  isDocumentAvailable: Scalars['Boolean'];
  isValidForPayment: Scalars['Boolean'];
  issueDate?: Maybe<Scalars['String']>;
  issueDateTime: My3DateTime;
  originalPaymentDueDate?: Maybe<Scalars['String']>;
  /** is only present if the paymentDueDateTime has been postponed */
  originalPaymentDueDateTime?: Maybe<My3DateTime>;
  /** @deprecated change to paymentDueDateTime */
  paymentDueDate?: Maybe<Scalars['String']>;
  paymentDueDateTime: My3DateTime;
  /** Gives a link to payment through dibs. Will not return a link if invoice is not valid for payment */
  paymentLink?: Maybe<Scalars['My3URL']>;
  /** For now the possible values for this are Autogiro, Plusgiro, Bankgiro more could be added dynamically */
  paymentMedium?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<My3PaymentMethodOptionBase>;
};

export type My3InvoicePaymentLinkArgs = {
  paymentLinkRequest: My3PaymentLinkInput;
};

export type My3InvoiceDocument = {
  __typename?: 'My3InvoiceDocument';
  path: Scalars['String'];
  /** @deprecated whole url can not be used. Use path instead */
  url?: Maybe<Scalars['My3URL']>;
};

export type My3InvoiceHistory = {
  __typename?: 'My3InvoiceHistory';
  /** @deprecated use accountNumber on each invoice */
  accountNumber?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  invoices: Array<Maybe<My3Invoice>>;
  numberOfUnpaidInvoices: Scalars['Int'];
  prioritizedInvoices: Array<Maybe<My3Invoice>>;
  /** total amount to pay for all invoices with status UNPAID, IN_COLLECTION AND OVERDUE */
  unpaidAmount?: Maybe<Scalars['My3BigDecimal']>;
};

export enum My3InvoiceStatus {
  InCollection = 'IN_COLLECTION',
  Overdue = 'OVERDUE',
  Paid = 'PAID',
  Unknown = 'UNKNOWN',
  Unpaid = 'UNPAID',
}

export type My3MarketingCloudInfoResponse = {
  __typename?: 'My3MarketingCloudInfoResponse';
  /** Depends on customerType possible values are SEB (Business) and SEC (Consumer) */
  businessUnit: Scalars['String'];
  contactId?: Maybe<Scalars['String']>;
};

export type My3MessageEvent = {
  __typename?: 'My3MessageEvent';
  connectingNumber: Scalars['String'];
  cost: Scalars['My3BigDecimal'];
  /** @deprecated change to dateTime */
  dateInEpoch: Scalars['String'];
  dateTime: My3DateTime;
  description: Scalars['String'];
  eventId: Scalars['String'];
  invoiceLabel: Scalars['String'];
  roamingInformation?: Maybe<My3RoamingInformation>;
};

export type My3MessageUsage = {
  __typename?: 'My3MessageUsage';
  messageEvents: Array<Maybe<My3MessageEvent>>;
  totalCost: Scalars['My3BigDecimal'];
  totalMms: Scalars['My3Long'];
  totalSms: Scalars['My3Long'];
};

export type My3Msisdn = {
  __typename?: 'My3Msisdn';
  msisdn?: Maybe<Scalars['String']>;
};

export enum My3MsisdnVisibility {
  Public = 'PUBLIC',
  Secret = 'SECRET',
}

export type My3NoticePeriod = {
  __typename?: 'My3NoticePeriod';
  months?: Maybe<Scalars['Int']>;
};

export enum My3OperationStatus {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
}

export type My3OrderConfirmation = {
  __typename?: 'My3OrderConfirmation';
  orderId?: Maybe<Scalars['String']>;
  status: My3OrderConfirmationStatus;
};

export enum My3OrderConfirmationStatus {
  OrderPlaced = 'ORDER_PLACED',
  OrderSucceeded = 'ORDER_SUCCEEDED',
}

export type My3OrderEsim = {
  __typename?: 'My3OrderEsim';
  esimDownloadLink: Scalars['String'];
  esimStatus: Scalars['String'];
  qrImageData: My3QrImage;
  status: My3OrderConfirmationStatus;
  uiccid: Scalars['String'];
};

export type My3OrderTrioSim = {
  __typename?: 'My3OrderTrioSim';
  status: My3OrderConfirmationStatus;
};

export type My3OrderUsim = My3OrderEsim | My3OrderTrioSim;

export enum My3PaymentGroup {
  Bank = 'BANK',
  Card = 'CARD',
  Swish = 'SWISH',
}

export type My3PaymentLinkInput = {
  /** Redirect url for a successful transaction */
  acceptUrl: Scalars['My3URL'];
  /** Is not used anymore */
  callbackUrl?: Maybe<Scalars['My3URL']>;
  /** Redirect url for a canceled transaction */
  cancelUrl: Scalars['My3URL'];
  /** Redirect url for an unsuccessful transaction */
  declineUrl: Scalars['My3URL'];
  paymentGroup: My3PaymentGroup;
  paymentMethod: My3PaymentOptionsMethod;
};

export enum My3PaymentMethod {
  AutoGiro = 'AUTO_GIRO',
  Manual = 'MANUAL',
}

export type My3PaymentMethodOption = My3PaymentMethodOptionBase & {
  __typename?: 'My3PaymentMethodOption';
  billMedia?: Maybe<My3BillMedia>;
  paymentMethod?: Maybe<My3PaymentMethod>;
};

export type My3PaymentMethodOptionBase = {
  billMedia?: Maybe<My3BillMedia>;
  paymentMethod?: Maybe<My3PaymentMethod>;
};

export enum My3PaymentOption {
  Postpaid = 'POSTPAID',
  Prepaid = 'PREPAID',
}

export type My3PaymentOptions = {
  __typename?: 'My3PaymentOptions';
  paymentGroup: My3PaymentGroup;
  paymentMethods: Array<Maybe<My3PaymentOptionsMethod>>;
};

export enum My3PaymentOptionsByInput {
  PreselectOrderBy = 'PRESELECT_ORDER_BY',
}

export enum My3PaymentOptionsMethod {
  CreditCard = 'CREDIT_CARD',
  DibsSwish = 'DIBS_SWISH',
  Fsb = 'FSB',
  NordeaSe = 'NORDEA_SE',
  Sebc = 'SEBC',
  Sebp = 'SEBP',
  Shb = 'SHB',
}

export enum My3PublicListing {
  Public = 'PUBLIC',
  Secret = 'SECRET',
}

export type My3PurchaseTopup = {
  __typename?: 'My3PurchaseTopup';
  orderDateTime?: Maybe<My3DateTime>;
  /** @deprecated change to orderDateTime */
  orderDateTimeInEpoch?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['Int']>;
  successMessage?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type My3QrImage = {
  __typename?: 'My3QrImage';
  base64Data: Scalars['String'];
  mediaType: Scalars['String'];
};

export enum My3Roaming {
  National = 'NATIONAL',
  SurfPass = 'SURF_PASS',
}

export type My3RoamingInformation = {
  __typename?: 'My3RoamingInformation';
  country: Scalars['String'];
  network: Scalars['String'];
};

export type My3SatelliteRoamingSetting = {
  __typename?: 'My3SatelliteRoamingSetting';
  status: My3SatelliteRoamingSettingStatus;
  value: My3SatelliteRoamingSettingValue;
};

export enum My3SatelliteRoamingSettingStatus {
  Available = 'AVAILABLE',
  NotAvailable = 'NOT_AVAILABLE',
  Pending = 'PENDING',
}

export enum My3SatelliteRoamingSettingValue {
  Allow = 'ALLOW',
  Block = 'BLOCK',
}

export type My3SharedData = {
  __typename?: 'My3SharedData';
  isUnlimited?: Maybe<Scalars['Boolean']>;
  /** @deprecated change to refillDateTime */
  refillDateInEpoch: Scalars['String'];
  refillDateTime: My3DateTime;
  sharedFreeUnit?: Maybe<My3SharedFreeUnit>;
  /** @deprecated change to sharedFreeUnit */
  sharedFreeUnits?: Maybe<Array<Maybe<My3FreeUnit>>>;
  sharesWith?: Maybe<Scalars['Int']>;
  /** @deprecated use sharesWith under SharedData */
  subscriptionCount?: Maybe<Scalars['Int']>;
  subscriptions?: Maybe<Array<Maybe<My3FreeUnitConsumption>>>;
};

export type My3SharedFreeUnit = {
  __typename?: 'My3SharedFreeUnit';
  category: My3CategoryCode;
  /** @deprecated Use parent isUnlimited instead, sometimes we dont get any SharedFreeUnit (eg. unlimited + extraUser) */
  isUnlimited?: Maybe<Scalars['Boolean']>;
  remainingUnitKey?: Maybe<Scalars['String']>;
  remainingValue?: Maybe<Scalars['My3BigDecimal']>;
  thresholdPassed?: Maybe<Scalars['Boolean']>;
  totalUnitKey?: Maybe<Scalars['String']>;
  totalValue?: Maybe<Scalars['My3BigDecimal']>;
};

export type My3SimInfo = {
  __typename?: 'My3SimInfo';
  puk: Scalars['String'];
  uiccId: Scalars['String'];
};

export type My3SmsPaymentMethodOption = My3PaymentMethodOptionBase & {
  __typename?: 'My3SmsPaymentMethodOption';
  billMedia?: Maybe<My3BillMedia>;
  msisdn?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<My3PaymentMethod>;
};

export type My3SpendLimitMetaData = {
  __typename?: 'My3SpendLimitMetaData';
  limits: Array<Maybe<Scalars['Int']>>;
  spendLimitType: My3SpendLimitType;
};

export type My3SpendLimitSetting = {
  __typename?: 'My3SpendLimitSetting';
  hardLimit?: Maybe<Scalars['Int']>;
  pauseDate?: Maybe<Scalars['My3LocalDate']>;
  primaryMsisdn?: Maybe<My3Msisdn>;
  softLimit?: Maybe<Scalars['Int']>;
  type: My3SpendLimitType;
};

export enum My3SpendLimitType {
  DataRoaming = 'DATA_ROAMING',
  Total = 'TOTAL',
}

export enum My3SubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Disconnect = 'DISCONNECT',
  Hotlined = 'HOTLINED',
  PendingActivation = 'PENDING_ACTIVATION',
  PendingDisconnect = 'PENDING_DISCONNECT',
  PendingHotline = 'PENDING_HOTLINE',
  PendingResumption = 'PENDING_RESUMPTION',
  PendingResumptionHotline = 'PENDING_RESUMPTION_HOTLINE',
  PendingSuspension = 'PENDING_SUSPENSION',
  PendingTransfer = 'PENDING_TRANSFER',
  Resume = 'RESUME',
  Suspended = 'SUSPENDED',
  Uninstalled = 'UNINSTALLED',
}

export enum My3SubscriptionsFilter {
  All = 'ALL',
  NonShared = 'NON_SHARED',
  Shared = 'SHARED',
}

export enum My3SupportedLanguages {
  Den = 'DEN',
  Eng = 'ENG',
  Swe = 'SWE',
}

export type My3Tariff = {
  __typename?: 'My3Tariff';
  adminSimSamlet?: Maybe<Scalars['Boolean']>;
  extraUser?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  isMinimumCommitment?: Maybe<Scalars['Boolean']>;
  isPott: Scalars['Boolean'];
  isPrepaid: Scalars['Boolean'];
  name: Scalars['String'];
  recurringPrice?: Maybe<Scalars['My3BigDecimal']>;
  tariffType: My3TariffType;
  unlimited: My3Unlimited;
  uspsAndInfo: My3TariffInformation;
};

export type My3TariffChange = {
  __typename?: 'My3TariffChange';
  changeType: My3ChangeAction;
  description: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  productId: Scalars['String'];
};

export enum My3TariffChangeError {
  IsBroadband = 'IS_BROADBAND',
  IsBusiness = 'IS_BUSINESS',
  IsEndUser = 'IS_END_USER',
  IsHotlined = 'IS_HOTLINED',
  IsPrepaid = 'IS_PREPAID',
  NotInBinding = 'NOT_IN_BINDING',
}

export type My3TariffDiscount = {
  __typename?: 'My3TariffDiscount';
  amount?: Maybe<Scalars['Float']>;
  percentage?: Maybe<Scalars['Float']>;
  recurringPrice?: Maybe<Scalars['Float']>;
};

export type My3TariffInformation = {
  __typename?: 'My3TariffInformation';
  subscriptionInfo?: Maybe<Scalars['String']>;
  usps: Array<Maybe<My3TariffUspResponse>>;
};

export type My3TariffRecommendation = {
  __typename?: 'My3TariffRecommendation';
  isRecommended: Scalars['Boolean'];
};

export enum My3TariffType {
  Data = 'DATA',
  Voice = 'VOICE',
}

export type My3TariffUnit = {
  __typename?: 'My3TariffUnit';
  amount?: Maybe<Scalars['String']>;
  isUnlimited?: Maybe<Scalars['Boolean']>;
  unit?: Maybe<Scalars['String']>;
};

export type My3TariffUspResponse = {
  __typename?: 'My3TariffUspResponse';
  /** @deprecated Use usps instead (got iconName and order) */
  text?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Use uspType instead (enum) */
  type?: Maybe<Scalars['String']>;
  uspType: My3UspType;
  usps: Array<Maybe<My3Usp>>;
};

export type My3TaxpayerId = {
  __typename?: 'My3TaxpayerId';
  taxPayerId?: Maybe<Scalars['String']>;
};

export type My3Topups = {
  __typename?: 'My3Topups';
  buyableTopups?: Maybe<Array<Maybe<My3BuyableTopups>>>;
  description?: Maybe<Scalars['String']>;
  roaming?: Maybe<My3Roaming>;
  roamingRegion?: Maybe<Scalars['String']>;
};

export type My3Unlimited = {
  __typename?: 'My3Unlimited';
  calls: Scalars['Boolean'];
  data: Scalars['Boolean'];
  mms: Scalars['Boolean'];
  sms: Scalars['Boolean'];
};

export type My3UntilRefill = {
  __typename?: 'My3UntilRefill';
  dateInEpoch?: Maybe<Scalars['String']>;
};

export type My3UpdateConsentInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  consentId?: Maybe<Scalars['String']>;
};

export type My3UpdateConsents = {
  __typename?: 'My3UpdateConsents';
  status: My3UpdateConsentsStatus;
};

export enum My3UpdateConsentsStatus {
  Failed = 'FAILED',
  Success = 'SUCCESS',
}

export type My3UpdateSubscriptionNameInput = {
  firstName: Scalars['String'];
  isid: Scalars['String'];
  lastName: Scalars['String'];
};

export type My3Usage = {
  __typename?: 'My3Usage';
  cursorPagination?: Maybe<My3CursorPagination>;
  dataUsage: My3DataUsage;
  messageUsage?: Maybe<My3MessageUsage>;
  /** @deprecated change to periodEndDateTime */
  periodEnd: Scalars['String'];
  periodEndDateTime: My3DateTime;
  /** @deprecated change to periodStartDateTime */
  periodStart: Scalars['String'];
  periodStartDateTime: My3DateTime;
  voiceUsage?: Maybe<My3VoiceUsage>;
};

export enum My3UsageType {
  Data = 'DATA',
  Messages = 'MESSAGES',
  Voice = 'VOICE',
}

export enum My3UserRole {
  Admin = 'ADMIN',
  EndUser = 'END_USER',
}

export type My3UserSession = {
  __typename?: 'My3UserSession';
  authMethod?: Maybe<My3AuthMethod>;
  boId?: Maybe<My3BoId>;
  country?: Maybe<My3Country>;
  customerType?: Maybe<My3CustomerType>;
  languages?: Maybe<My3SupportedLanguages>;
  singleSubscription?: Maybe<Scalars['Boolean']>;
  subscriptionCount?: Maybe<Scalars['Int']>;
  swedishConsumer: Scalars['Boolean'];
  taxpayerId?: Maybe<My3TaxpayerId>;
  userName?: Maybe<Scalars['String']>;
  userRole?: Maybe<My3UserRole>;
};

export type My3UsimProduct = {
  __typename?: 'My3UsimProduct';
  label: Scalars['String'];
  productId: Scalars['String'];
  usimType: Scalars['String'];
};

export type My3Usp = {
  __typename?: 'My3Usp';
  iconName?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['My3Long']>;
  text?: Maybe<Scalars['String']>;
};

export enum My3UspType {
  Data = 'DATA',
  Mms = 'MMS',
  Sms = 'SMS',
  SmsMms = 'SMS_MMS',
  Voice = 'VOICE',
}

export type My3ValidForChange = {
  __typename?: 'My3ValidForChange';
  invalidReason?: Maybe<My3TariffChangeError>;
  isValidForChange: Scalars['Boolean'];
};

export type My3VoiceDuration = {
  __typename?: 'My3VoiceDuration';
  hours: Scalars['Int'];
  minutes: Scalars['Int'];
  seconds: Scalars['Int'];
};

export type My3VoiceEvent = {
  __typename?: 'My3VoiceEvent';
  connectingNumber?: Maybe<Scalars['String']>;
  cost: Scalars['My3BigDecimal'];
  /** @deprecated change to dateTime */
  dateInEpoch: Scalars['String'];
  dateTime: My3DateTime;
  description: Scalars['String'];
  duration: My3VoiceDuration;
  eventId: Scalars['String'];
  invoiceLabel: Scalars['String'];
  roamingInformation?: Maybe<My3RoamingInformation>;
};

export type My3VoiceUsage = {
  __typename?: 'My3VoiceUsage';
  totalCalls: Scalars['Int'];
  totalCost: Scalars['My3BigDecimal'];
  totalDuration: My3VoiceDuration;
  voiceEvents: Array<Maybe<My3VoiceEvent>>;
};

export type My3large = My3services & {
  __typename?: 'My3large';
  customerSize: My3CustomerSize;
  /** Extra costs for all subscriptions in specified month. Default current month */
  extraCost: My3ExtraCost;
  sharedData: Array<Maybe<My3SharedData>>;
  subscriptions: Array<Maybe<Subscription>>;
};

export type My3largeExtraCostArgs = {
  yearMonth?: Maybe<Scalars['String']>;
};

export type My3services = {
  customerSize: My3CustomerSize;
  /** Extra costs for all subscriptions in specified month. Default current month */
  extraCost: My3ExtraCost;
  sharedData: Array<Maybe<My3SharedData>>;
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
};

export type My3servicesExtraCostArgs = {
  yearMonth?: Maybe<Scalars['String']>;
};

export type My3signAutogiroLink = {
  __typename?: 'My3signAutogiroLink';
  signAutogiroUrl: Scalars['String'];
};

export type My3signingAutogiroRequestInput = {
  bankAccountNumber: Scalars['String'];
  bankClearingNumber: Scalars['Int'];
  bankName: Scalars['String'];
  customerNumber: Scalars['String'];
  msisdn: Scalars['String'];
  name: Scalars['String'];
  redirectUri: Scalars['String'];
};

export type My3small = My3services & {
  __typename?: 'My3small';
  customerSize: My3CustomerSize;
  /** Extra costs for all subscriptions in specified month. Default current month */
  extraCost: My3ExtraCost;
  sharedData: Array<Maybe<My3SharedData>>;
  subscriptions: Array<Maybe<Subscription>>;
};

export type My3smallExtraCostArgs = {
  yearMonth?: Maybe<Scalars['String']>;
};

export type LogOutResponse = {
  __typename?: 'LogOutResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type CompisEligibility = {
  __typename?: 'CompisEligibility';
  isEligible?: Maybe<Scalars['Boolean']>;
  messageSent?: Maybe<Scalars['Boolean']>;
};

export type CompisActivationResponse = {
  __typename?: 'CompisActivationResponse';
  iccid?: Maybe<Scalars['String']>;
  smdpAddress?: Maybe<Scalars['String']>;
};

export type CompisDeactivationResponse = {
  __typename?: 'CompisDeactivationResponse';
  orderId?: Maybe<Scalars['String']>;
};

export type CompisDecodedJwt = {
  __typename?: 'CompisDecodedJwt';
  iss?: Maybe<Scalars['String']>;
  sub?: Maybe<Scalars['String']>;
  aud?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['String']>;
  iat?: Maybe<Scalars['String']>;
  jti?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerType?: Maybe<Scalars['String']>;
  boId?: Maybe<Scalars['String']>;
  msisdn?: Maybe<Scalars['String']>;
  taxpayerId?: Maybe<Scalars['String']>;
  primaryIccid?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  imei?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  deviceCustomName?: Maybe<Scalars['String']>;
};

export type CompisReplacementResponse = {
  __typename?: 'CompisReplacementResponse';
  iccid?: Maybe<Scalars['String']>;
  smdpAddress?: Maybe<Scalars['String']>;
};

export type CompisUrlResponse = {
  __typename?: 'CompisUrlResponse';
  url?: Maybe<Scalars['String']>;
  postData?: Maybe<Scalars['String']>;
};

export type CompisSubscription = {
  __typename?: 'CompisSubscription';
  name?: Maybe<Scalars['String']>;
  msisdn?: Maybe<Scalars['String']>;
  tariffPlan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type CompisDeviceProduct = {
  __typename?: 'CompisDeviceProduct';
  productId?: Maybe<Scalars['String']>;
  externalLabel?: Maybe<Scalars['String']>;
  priceInclVat?: Maybe<Scalars['String']>;
  priceExclVat?: Maybe<Scalars['String']>;
};

export type CompisDevice = {
  __typename?: 'CompisDevice';
  productId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  priceInclVat?: Maybe<Scalars['String']>;
  priceExclVat?: Maybe<Scalars['String']>;
  hardwareName?: Maybe<Scalars['String']>;
  eid?: Maybe<Scalars['String']>;
  imei?: Maybe<Scalars['String']>;
  imsi?: Maybe<Scalars['String']>;
  iccid?: Maybe<Scalars['String']>;
  msisdn?: Maybe<Scalars['String']>;
  installedDate?: Maybe<Scalars['String']>;
};

export type CompisSubscriptionStatus = {
  __typename?: 'CompisSubscriptionStatus';
  subscription?: Maybe<CompisSubscription>;
  deviceProduct?: Maybe<CompisDeviceProduct>;
  devices?: Maybe<Array<Maybe<CompisDevice>>>;
};

export type MaintenanceStatus = {
  __typename?: 'MaintenanceStatus';
  inMaintenance?: Maybe<Scalars['Boolean']>;
};

export enum WebshopStockLevel {
  OutOfStock = 'OUT_OF_STOCK',
  SoonInStock = 'SOON_IN_STOCK',
  FewInStock = 'FEW_IN_STOCK',
  ManyInStock = 'MANY_IN_STOCK',
  UncertainStock = 'UNCERTAIN_STOCK',
}

export enum WebshopProductType {
  Mobile = 'MOBILE',
}

export enum WebshopCustomerType {
  Consumer = 'CONSUMER',
  Businss = 'BUSINSS',
}

export enum WebshopCurrency {
  Sek = 'SEK',
}

export enum WebshopSubscriptionType {
  Prepaid = 'PREPAID',
  Postpaid = 'POSTPAID',
}

export enum WebshopSubscriptionCategory {
  Voice = 'VOICE',
  Data = 'DATA',
  Hardware = 'HARDWARE',
}

export enum WebshopExpectedDelivery {
  TwoToThreeDays = 'TWO_TO_THREE_DAYS',
  OneWeek = 'ONE_WEEK',
  OneToTwoWeeks = 'ONE_TO_TWO_WEEKS',
  TwoToThreeWeeks = 'TWO_TO_THREE_WEEKS',
  ThreeToFourWeeks = 'THREE_TO_FOUR_WEEKS',
  FourToSixWeeks = 'FOUR_TO_SIX_WEEKS',
  Unconfirmed = 'UNCONFIRMED',
}

export type WebshopMetaTags = {
  __typename?: 'WebshopMetaTags';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type WebshopColorSwatch = {
  __typename?: 'WebshopColorSwatch';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rgb?: Maybe<Scalars['String']>;
};

export type WebshopImage = {
  __typename?: 'WebshopImage';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type WebshopDeviceSpecifications = {
  __typename?: 'WebshopDeviceSpecifications';
  value?: Maybe<Scalars['Any']>;
  key?: Maybe<Scalars['String']>;
};

export type WebshopDeviceArticle = {
  __typename?: 'WebshopDeviceArticle';
  id: Scalars['ID'];
  /** @deprecated Field is no longer used - 24.02.2020 */
  variationText?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  generalImage?: Maybe<WebshopImage>;
  color?: Maybe<WebshopColorSwatch>;
  storageSize?: Maybe<Scalars['String']>;
  price?: Maybe<WebshopPrice>;
  prices?: Maybe<Array<Maybe<WebshopArticlePrice>>>;
  stock?: Maybe<WebshopStockLevel>;
  images: Array<Maybe<WebshopImage>>;
  expectedDelivery?: Maybe<WebshopExpectedDelivery>;
};

export type WebshopDevice = {
  __typename?: 'WebshopDevice';
  id: Scalars['ID'];
  urlSlug?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  generalImage?: Maybe<WebshopImage>;
  articles: Array<Maybe<WebshopDeviceArticle>>;
  specifications?: Maybe<Array<Maybe<WebshopDeviceSpecifications>>>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  salesText?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  includedInThePackage?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebshopSubscriptionUsp = {
  __typename?: 'WebshopSubscriptionUSP';
  id: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WebshopPricePlanIncludedData = {
  __typename?: 'WebshopPricePlanIncludedData';
  amount?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  unlimited?: Maybe<Scalars['Boolean']>;
};

export type WebshopPricePlanPrice = {
  __typename?: 'WebshopPricePlanPrice';
  currency: Scalars['String'];
  recurring: Scalars['String'];
};

export type WebshopPricePlan = {
  __typename?: 'WebshopPricePlan';
  id: Scalars['ID'];
  subscriptionType?: Maybe<WebshopSubscriptionType>;
  subscriptionCategory?: Maybe<WebshopSubscriptionCategory>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  familyName?: Maybe<Scalars['String']>;
  customerType?: Maybe<WebshopCustomerType>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  validFrom?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  currency?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  country?: Maybe<Scalars['String']>;
  includedData?: Maybe<WebshopPricePlanIncludedData>;
  /** @deprecated Field is no longer used - 24.02.2020 */
  generalInfo?: Maybe<Scalars['String']>;
  subscriptionInfo?: Maybe<Scalars['String']>;
  usps?: Maybe<Array<Maybe<WebshopSubscriptionUsp>>>;
  price?: Maybe<WebshopPricePlanPrice>;
};

export type WebshopBanner = {
  __typename?: 'WebshopBanner';
  text: Scalars['String'];
  backgroundColor: Scalars['String'];
  textColor: Scalars['String'];
};

export type WebshopPrice = {
  __typename?: 'WebshopPrice';
  upfront?: Maybe<Scalars['Float']>;
  originalUpfront?: Maybe<Scalars['Float']>;
  recurring?: Maybe<Scalars['Float']>;
  originalRecurring?: Maybe<Scalars['Float']>;
  minCost?: Maybe<Scalars['Float']>;
  currency?: Maybe<WebshopCurrency>;
};

export type WebshopArticlePrice = {
  __typename?: 'WebshopArticlePrice';
  paymentPeriodId: Scalars['String'];
  paymentPeriodDuration: Scalars['Int'];
  currency: Scalars['String'];
  price: Scalars['String'];
};

export type WebshopPriceBreakdown = {
  __typename?: 'WebshopPriceBreakdown';
  productId: Scalars['ID'];
  upfront?: Maybe<Scalars['Float']>;
  originalUpfront?: Maybe<Scalars['Float']>;
  recurring?: Maybe<Scalars['Float']>;
  originalRecurring?: Maybe<Scalars['Float']>;
};

export type WebshopBindingPeriod = {
  __typename?: 'WebshopBindingPeriod';
  duration?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type WebshopProduct = {
  __typename?: 'WebshopProduct';
  id: Scalars['ID'];
  productType?: Maybe<WebshopProductType>;
  urlSlug?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  image?: Maybe<WebshopImage>;
  /** @deprecated Field is no longer used - changing to image instead 24.02.2020 */
  generalImage?: Maybe<WebshopImage>;
  /** @deprecated Field is no longer used - changing all fields to null24.02.2020 - removed in api v3 */
  prepaid?: Maybe<WebshopPrice>;
  postpaid?: Maybe<WebshopPrice>;
  stock?: Maybe<WebshopStockLevel>;
  banner?: Maybe<WebshopBanner>;
  bindingPeriod?: Maybe<WebshopBindingPeriod>;
};

export type WebshopArticlePricePlanCosts = {
  __typename?: 'WebshopArticlePricePlanCosts';
  id?: Maybe<Scalars['ID']>;
  articleId?: Maybe<Scalars['String']>;
  pricePlanId?: Maybe<Scalars['String']>;
  accessoryCampaignIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<WebshopPrice>;
  bindingPeriod?: Maybe<WebshopBindingPeriod>;
  priceBreakdown?: Maybe<Array<Maybe<WebshopPriceBreakdown>>>;
};

export type WebshopCheckoutArticle = {
  __typename?: 'WebshopCheckoutArticle';
  id: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  color?: Maybe<WebshopColorSwatch>;
  storageSize?: Maybe<Scalars['String']>;
  image?: Maybe<WebshopImage>;
  urlSlug?: Maybe<Scalars['String']>;
  expectedDelivery?: Maybe<WebshopExpectedDelivery>;
};

export type WebshopCheckoutPricePlan = {
  __typename?: 'WebshopCheckoutPricePlan';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  includedData?: Maybe<WebshopPricePlanIncludedData>;
};

export type WebshopCheckoutRow = {
  __typename?: 'WebshopCheckoutRow';
  combinationId?: Maybe<Scalars['ID']>;
  article?: Maybe<WebshopCheckoutArticle>;
  pricePlan?: Maybe<WebshopCheckoutPricePlan>;
  price?: Maybe<WebshopPrice>;
  priceBreakdown?: Maybe<Array<Maybe<WebshopPriceBreakdown>>>;
  bindingPeriod?: Maybe<WebshopBindingPeriod>;
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  accessoryCampaigns?: Maybe<Array<Maybe<WebshopAccessoryCampaign>>>;
  combinations?: Maybe<Array<Maybe<WebshopArticlePricePlanCosts>>>;
  accessories?: Maybe<Array<Maybe<WebshopAccessory>>>;
};

export type WebshopDeviceProductsResponse = {
  __typename?: 'WebshopDeviceProductsResponse';
  id: Scalars['ID'];
  products?: Maybe<Array<Maybe<WebshopProduct>>>;
  requestId?: Maybe<Scalars['String']>;
};

export type WebshopDevicesResponse = {
  __typename?: 'WebshopDevicesResponse';
  id: Scalars['ID'];
  products?: Maybe<Array<Maybe<WebshopProduct>>>;
  requestId?: Maybe<Scalars['String']>;
};

export type WebshopPopular = {
  __typename?: 'WebshopPopular';
  id: Scalars['ID'];
  popularProducts?: Maybe<Array<Maybe<WebshopProduct>>>;
};

export type WebshopPromotions = {
  __typename?: 'WebshopPromotions';
  id: Scalars['ID'];
  promotionProducts?: Maybe<Array<Maybe<WebshopProduct>>>;
};

export type WebshopDeviceResponse = {
  __typename?: 'WebshopDeviceResponse';
  device?: Maybe<WebshopDevice>;
  editorial?: Maybe<WebshopDeviceEditorial>;
  meta?: Maybe<WebshopMetaTags>;
};

export type WebshopDeviceBundlesResponse = {
  __typename?: 'WebshopDeviceBundlesResponse';
  accessories?: Maybe<Array<Maybe<WebshopAccessory>>>;
  accessoryCampaigns?: Maybe<Array<Maybe<WebshopAccessoryCampaign>>>;
  campaignTokenFound?: Maybe<Scalars['Boolean']>;
  combinations?: Maybe<Array<Maybe<WebshopArticlePricePlanCosts>>>;
};

export type WebshopDeviceDetailsResponse = {
  __typename?: 'WebshopDeviceDetailsResponse';
  campaignTokenFound?: Maybe<Scalars['Boolean']>;
  device?: Maybe<WebshopDevice>;
  pricePlans?: Maybe<Array<Maybe<WebshopPricePlan>>>;
  accessories?: Maybe<Array<Maybe<WebshopAccessory>>>;
  editorial?: Maybe<WebshopDeviceEditorial>;
  accessoryCampaigns?: Maybe<Array<Maybe<WebshopAccessoryCampaign>>>;
  combinations?: Maybe<Array<Maybe<WebshopArticlePricePlanCosts>>>;
  meta?: Maybe<WebshopMetaTags>;
  requestId?: Maybe<Scalars['String']>;
  threeWorldCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
  euEesCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebshopPricePlansResponse = {
  __typename?: 'WebshopPricePlansResponse';
  pricePlans?: Maybe<Array<Maybe<WebshopPricePlan>>>;
  threeWorldCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
  euEesCountries?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WebshopCheckoutRowsResponse = {
  __typename?: 'WebshopCheckoutRowsResponse';
  rows?: Maybe<Array<Maybe<WebshopCheckoutRow>>>;
};

export type WebshopNumberProlongingResponse = {
  __typename?: 'webshopNumberProlongingResponse';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  attributes?: Maybe<WebshopNumberProlongingAttributes>;
  recaptchaValidation?: Maybe<Scalars['Boolean']>;
};

export type WebshopNumberProlongingAttributes = {
  __typename?: 'webshopNumberProlongingAttributes';
  isProlongable?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
};

export type WebshopAccessory = {
  __typename?: 'WebshopAccessory';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<WebshopImage>>>;
};

export type WebshopAccessoryCampaign = {
  __typename?: 'WebshopAccessoryCampaign';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  editorialMarkdown?: Maybe<Scalars['String']>;
  campaignImage?: Maybe<WebshopImage>;
  accessories?: Maybe<Scalars['String']>;
  iconName?: Maybe<Scalars['String']>;
};

export type WebshopDeviceEditorial = {
  __typename?: 'WebshopDeviceEditorial';
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  deviceDescriptionMarkdown?: Maybe<Scalars['String']>;
};

export type WebshopCheckoutRowInput = {
  deviceId?: Maybe<Scalars['ID']>;
  articleId?: Maybe<Scalars['ID']>;
  pricePlanId?: Maybe<Scalars['ID']>;
};

export enum CustomerTypes {
  Business = 'business',
  Consumer = 'consumer',
}

export enum DeviceTypes {
  Phone = 'phone',
  Router = 'router',
  Tablet = 'tablet',
}

export enum PricePlanTypes {
  Voice = 'voice',
  Isp = 'isp',
}

export enum SubscriptionTypes {
  Voice = 'voice',
  Isp = 'isp',
}

export enum ProlongTypes {
  Bundle = 'bundle',
  Device = 'device',
  Sim = 'sim',
}

export type ContentEntity = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

export enum ContentHeadingSize {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Banner = 'Banner',
}

export enum ContentContextType {
  Consumer = 'consumer',
  Business = 'business',
}

export type ContentPromotionItem = ContentPromotionCard | ContentPimCard;

export type ContentMenuItem = ContentExternalLink | ContentPage | ContentMenu;

export type ContentLinkable =
  | ContentExternalLink
  | ContentPage
  | ContentCustomAction;

export type ContentCustomAction = ContentEntity & {
  __typename?: 'ContentCustomAction';
  id: Scalars['ID'];
  type: Scalars['String'];
  action?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ContentCard = ContentEntity & {
  __typename?: 'ContentCard';
  id: Scalars['ID'];
  type: Scalars['String'];
  topNote?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  bottomNote?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  notificationType?: Maybe<Scalars['String']>;
  notificationMessage?: Maybe<Scalars['String']>;
  fullWidthImage?: Maybe<ContentImage>;
  bulletList?: Maybe<Array<Maybe<Scalars['String']>>>;
  content?: Maybe<Scalars['String']>;
  link?: Maybe<ContentLinkable>;
  isButton?: Maybe<Scalars['Boolean']>;
  invertTheme?: Maybe<Scalars['Boolean']>;
};

export type ContentExternalLink = ContentEntity & {
  __typename?: 'ContentExternalLink';
  id: Scalars['ID'];
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
};

export type ContentHeader = ContentEntity & {
  __typename?: 'ContentHeader';
  id: Scalars['ID'];
  type: Scalars['String'];
  contextType: ContentContextType;
  contextLink?: Maybe<ContentLinkable>;
  shoppingCart?: Maybe<ContentLinkable>;
  menu?: Maybe<ContentMenu>;
  searchSuggestions?: Maybe<Array<Maybe<ContentLinkable>>>;
  /** @deprecated Use 'contextLink' instead */
  privateContextText?: Maybe<Scalars['String']>;
  /** @deprecated Use 'contextLink' instead */
  privateContextUrl?: Maybe<Scalars['String']>;
  /** @deprecated Use 'contextLink' instead */
  companyContextText?: Maybe<Scalars['String']>;
  /** @deprecated Use 'contextLink' instead */
  companyContextUrl?: Maybe<Scalars['String']>;
};

export type ContentFooter = ContentEntity & {
  __typename?: 'ContentFooter';
  id: Scalars['ID'];
  type: Scalars['String'];
  contextType: ContentContextType;
  menu?: Maybe<ContentMenu>;
};

export type ContentPage = ContentEntity & {
  __typename?: 'ContentPage';
  id: Scalars['ID'];
  type: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  hiddenHeading?: Maybe<ContentHeading>;
  urlPath?: Maybe<Scalars['String']>;
  urlRegex?: Maybe<Scalars['String']>;
  urlPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalUrl?: Maybe<Scalars['String']>;
  useSubpathWildcard?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<Array<Maybe<ContentEntity>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  index?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  openGraphSettings?: Maybe<ContentOpenGraphSettings>;
};

export type ContentMenu = ContentEntity & {
  __typename?: 'ContentMenu';
  id: Scalars['ID'];
  type: Scalars['String'];
  items?: Maybe<Array<Maybe<ContentMenuItem>>>;
  mainLink?: Maybe<ContentLinkable>;
  mainLinkText?: Maybe<Scalars['String']>;
};

export type ContentHeading = ContentEntity & {
  __typename?: 'ContentHeading';
  id: Scalars['ID'];
  type: Scalars['String'];
  size?: Maybe<ContentHeadingSize>;
  text?: Maybe<Scalars['String']>;
};

export type ContentFaqSection = ContentEntity & {
  __typename?: 'ContentFaqSection';
  id: Scalars['ID'];
  type: Scalars['String'];
  categories?: Maybe<Array<Maybe<ContentFaqCategory>>>;
};

export type ContentFaqCategory = ContentEntity & {
  __typename?: 'ContentFaqCategory';
  id: Scalars['ID'];
  type: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  questionsTitle?: Maybe<Scalars['String']>;
  questions?: Maybe<Array<Maybe<ContentFaqQuestion>>>;
  secondaryQuestions?: Maybe<Array<Maybe<ContentFaqQuestion>>>;
};

export type ContentFaqQuestion = ContentEntity & {
  __typename?: 'ContentFaqQuestion';
  id: Scalars['ID'];
  type: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  questionText?: Maybe<Scalars['String']>;
  answerText?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentImage = ContentEntity & {
  __typename?: 'ContentImage';
  id: Scalars['ID'];
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentRow = ContentEntity & {
  __typename?: 'ContentRow';
  id: Scalars['ID'];
  type: Scalars['String'];
  heading?: Maybe<ContentHeading>;
  items?: Maybe<Array<Maybe<ContentEntity>>>;
  mobileColumns?: Maybe<Scalars['Int']>;
  tabletColumns?: Maybe<Scalars['Int']>;
  laptopColumns?: Maybe<Scalars['Int']>;
  desktopColumns?: Maybe<Scalars['Int']>;
  hasBackground?: Maybe<Scalars['Boolean']>;
};

export type ContentArticleItem = ContentEntity & {
  __typename?: 'ContentArticleItem';
  id: Scalars['ID'];
  type: Scalars['String'];
  promoId?: Maybe<Scalars['String']>;
  link?: Maybe<ContentLinkable>;
  heading?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  image?: Maybe<ContentImage>;
};

export type ContentContactUs = ContentEntity & {
  __typename?: 'ContentContactUs';
  id: Scalars['ID'];
  link?: Maybe<ContentLinkable>;
  type: Scalars['String'];
  heading?: Maybe<Scalars['String']>;
  contactUsButtonText?: Maybe<Scalars['String']>;
  hideContactUsButtonText?: Maybe<Scalars['String']>;
  contactUsCards?: Maybe<Array<Maybe<ContentEntity>>>;
};

export type ContentPromotionGrid = ContentEntity & {
  __typename?: 'ContentPromotionGrid';
  id: Scalars['ID'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentPromotionItem>>>;
  initialLayout?: Maybe<Scalars['Int']>;
};

export type ContentPromotionCard = ContentEntity & {
  __typename?: 'ContentPromotionCard';
  id: Scalars['ID'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  isPim: Scalars['Boolean'];
  deviceArticleId?: Maybe<Scalars['String']>;
  pricePlanId?: Maybe<Scalars['String']>;
  devicePromotionTitle?: Maybe<Scalars['String']>;
  banner?: Maybe<ContentPimBanner>;
  /** @deprecated Moved to the 'banner' object */
  bannerColor?: Maybe<Scalars['String']>;
  /** @deprecated Moved to the 'banner' object */
  bannerText?: Maybe<Scalars['String']>;
  imageAbove?: Maybe<Scalars['Boolean']>;
  image?: Maybe<ContentImage>;
  content?: Maybe<Scalars['String']>;
  link?: Maybe<ContentLinkable>;
};

export type ContentPimCard = {
  __typename?: 'ContentPimCard';
  id: Scalars['ID'];
  productType?: Maybe<Scalars['String']>;
  isPim: Scalars['Boolean'];
  urlSlug?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  devicePromotionTitle?: Maybe<Scalars['String']>;
  showManufacturer?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  image?: Maybe<ContentPimImage>;
  postpaid?: Maybe<ContentPimPrice>;
  stock?: Maybe<ContentPimStockLevel>;
  banner?: Maybe<ContentPimBanner>;
  bindingPeriod?: Maybe<ContentPimBindingPeriod>;
};

export enum ContentPimCurrency {
  Sek = 'SEK',
}

export enum ContentPimStockLevel {
  OutOfStock = 'OUT_OF_STOCK',
  SoonInStock = 'SOON_IN_STOCK',
  FewInStock = 'FEW_IN_STOCK',
  ManyInStock = 'MANY_IN_STOCK',
  UncertainStock = 'UNCERTAIN_STOCK',
}

export type ContentPimBindingPeriod = {
  __typename?: 'ContentPimBindingPeriod';
  duration?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type ContentPimBanner = {
  __typename?: 'ContentPimBanner';
  text: Scalars['String'];
  backgroundColor: Scalars['String'];
  textColor: Scalars['String'];
};

export type ContentPimImage = {
  __typename?: 'ContentPimImage';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentPimPrice = {
  __typename?: 'ContentPimPrice';
  upfront?: Maybe<Scalars['Float']>;
  originalUpfront?: Maybe<Scalars['Float']>;
  recurring?: Maybe<Scalars['Float']>;
  originalRecurring?: Maybe<Scalars['Float']>;
  minCost?: Maybe<Scalars['Float']>;
  currency?: Maybe<ContentPimCurrency>;
};

export type ContentExperiment = ContentEntity & {
  __typename?: 'ContentExperiment';
  id: Scalars['ID'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ContentExperimentVariant>>>;
};

export type ContentExperimentVariant = ContentEntity & {
  __typename?: 'ContentExperimentVariant';
  id: Scalars['ID'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  component?: Maybe<ContentEntity>;
};

export type ContentShortLink = ContentEntity & {
  __typename?: 'ContentShortLink';
  id: Scalars['ID'];
  type: Scalars['String'];
  dest?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
};

export type ContentProductList = ContentEntity & {
  __typename?: 'ContentProductList';
  id: Scalars['ID'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  isPopular?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<ContentHeading>;
  link?: Maybe<ContentLinkable>;
  hasBackground?: Maybe<Scalars['Boolean']>;
};

export type Drawer = ContentEntity & {
  __typename?: 'Drawer';
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
  body: Scalars['String'];
};

export type ContentDeviceDetails = ContentEntity & {
  __typename?: 'ContentDeviceDetails';
  id: Scalars['ID'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  deliveryConditions?: Maybe<Scalars['String']>;
  contactDetails?: Maybe<Scalars['String']>;
  surf?: Maybe<Drawer>;
  surf_eu?: Maybe<Drawer>;
};

export type ContentOpenGraphSettings = ContentEntity & {
  __typename?: 'ContentOpenGraphSettings';
  id: Scalars['ID'];
  type: Scalars['String'];
  ogTitle?: Maybe<Scalars['String']>;
  ogDescription?: Maybe<Scalars['String']>;
  ogUrl?: Maybe<Scalars['String']>;
  ogImage?: Maybe<ContentImage>;
  ogImageUrl?: Maybe<Scalars['String']>;
};

export type ContentPricePlanOverview = ContentEntity & {
  __typename?: 'ContentPricePlanOverview';
  id: Scalars['ID'];
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  pricePlanTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ChatConversationMember = {
  __typename?: 'ChatConversationMember';
  id?: Maybe<Scalars['String']>;
};

export type ChatStartConversationResponse = {
  __typename?: 'ChatStartConversationResponse';
  id?: Maybe<Scalars['String']>;
  member?: Maybe<ChatConversationMember>;
  eventStreamUri?: Maybe<Scalars['String']>;
};

export type ChatConversation = {
  __typename?: 'ChatConversation';
  id?: Maybe<Scalars['String']>;
  selfUri?: Maybe<Scalars['String']>;
};

export type ChatSender = {
  __typename?: 'ChatSender';
  id?: Maybe<Scalars['String']>;
};

export type ChatSendMessageResponse = {
  __typename?: 'ChatSendMessageResponse';
  id?: Maybe<Scalars['String']>;
  conversation?: Maybe<ChatConversation>;
  sender?: Maybe<ChatSender>;
  body?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  selfUri?: Maybe<Scalars['String']>;
};

export type ChatRestoredMessageResponse = {
  __typename?: 'ChatRestoredMessageResponse';
  body?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  conversation?: Maybe<ChatConversation>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  selfUri?: Maybe<Scalars['String']>;
  sender?: Maybe<ChatSender>;
  timestamp?: Maybe<Scalars['String']>;
};

export type ChatTypingIndicatorResponse = {
  __typename?: 'ChatTypingIndicatorResponse';
  id?: Maybe<Scalars['String']>;
  conversation?: Maybe<ChatConversation>;
  sender?: Maybe<ChatSender>;
  timestamp?: Maybe<Scalars['String']>;
};

export type ChatMemberResponse = {
  __typename?: 'ChatMemberResponse';
  customFields?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  joinDate?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ChatMessagesFromStoredChatResponse = {
  __typename?: 'ChatMessagesFromStoredChatResponse';
  pageSize?: Maybe<Scalars['Int']>;
  entities?: Maybe<Array<Maybe<ChatRestoredMessageResponse>>>;
};

export type ChatSignedDataResponse = {
  __typename?: 'ChatSignedDataResponse';
  jwt?: Maybe<Scalars['String']>;
};

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'My3OrderUsim',
        possibleTypes: [
          {
            name: 'My3OrderEsim',
          },
          {
            name: 'My3OrderTrioSim',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'My3PaymentMethodOptionBase',
        possibleTypes: [
          {
            name: 'My3PaymentMethodOption',
          },
          {
            name: 'My3SmsPaymentMethodOption',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'My3services',
        possibleTypes: [
          {
            name: 'My3large',
          },
          {
            name: 'My3small',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ContentEntity',
        possibleTypes: [
          {
            name: 'ContentCustomAction',
          },
          {
            name: 'ContentCard',
          },
          {
            name: 'ContentExternalLink',
          },
          {
            name: 'ContentHeader',
          },
          {
            name: 'ContentFooter',
          },
          {
            name: 'ContentPage',
          },
          {
            name: 'ContentMenu',
          },
          {
            name: 'ContentHeading',
          },
          {
            name: 'ContentFaqSection',
          },
          {
            name: 'ContentFaqCategory',
          },
          {
            name: 'ContentFaqQuestion',
          },
          {
            name: 'ContentImage',
          },
          {
            name: 'ContentRow',
          },
          {
            name: 'ContentArticleItem',
          },
          {
            name: 'ContentContactUs',
          },
          {
            name: 'ContentPromotionGrid',
          },
          {
            name: 'ContentPromotionCard',
          },
          {
            name: 'ContentExperiment',
          },
          {
            name: 'ContentExperimentVariant',
          },
          {
            name: 'ContentShortLink',
          },
          {
            name: 'ContentProductList',
          },
          {
            name: 'Drawer',
          },
          {
            name: 'ContentDeviceDetails',
          },
          {
            name: 'ContentOpenGraphSettings',
          },
          {
            name: 'ContentPricePlanOverview',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentPromotionItem',
        possibleTypes: [
          {
            name: 'ContentPromotionCard',
          },
          {
            name: 'ContentPimCard',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentMenuItem',
        possibleTypes: [
          {
            name: 'ContentExternalLink',
          },
          {
            name: 'ContentPage',
          },
          {
            name: 'ContentMenu',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentLinkable',
        possibleTypes: [
          {
            name: 'ContentExternalLink',
          },
          {
            name: 'ContentPage',
          },
          {
            name: 'ContentCustomAction',
          },
        ],
      },
    ],
  },
};
export default result;
