const countries = [
  {
    countryCode: 'AF',
    countryName: 'Afghanistan',
    currencyCode: 'AFN',
    population: '29121286',
    capital: 'Kabul',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'fa-AF,ps,uz-AF,tk'
  },
  {
    countryCode: 'AL',
    countryName: 'Albania',
    currencyCode: 'ALL',
    population: '2986952',
    capital: 'Tirana',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sq,el'
  },
  {
    countryCode: 'DZ',
    countryName: 'Algeria',
    currencyCode: 'DZD',
    population: '34586184',
    capital: 'Algiers',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-DZ'
  },
  {
    countryCode: 'AS',
    countryName: 'American Samoa',
    currencyCode: 'USD',
    population: '57881',
    capital: 'Pago Pago',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-AS,sm,to'
  },
  {
    countryCode: 'AD',
    countryName: 'Andorra',
    currencyCode: 'EUR',
    population: '84000',
    capital: 'Andorra la Vella',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'ca'
  },
  {
    countryCode: 'AO',
    countryName: 'Angola',
    currencyCode: 'AOA',
    population: '13068161',
    capital: 'Luanda',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'pt-AO'
  },
  {
    countryCode: 'AI',
    countryName: 'Anguilla',
    currencyCode: 'XCD',
    population: '13254',
    capital: 'The Valley',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-AI'
  },
  {
    countryCode: 'AQ',
    countryName: 'Antarctica',
    currencyCode: '',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
    continent: 'AN',
    languages: ''
  },
  {
    countryCode: 'AG',
    countryName: 'Antigua and Barbuda',
    currencyCode: 'XCD',
    population: '86754',
    capital: 'St. John\'s',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-AG'
  },
  {
    countryCode: 'AR',
    countryName: 'Argentina',
    currencyCode: 'ARS',
    population: '41343201',
    capital: 'Buenos Aires',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-AR,en,it,de,fr,gn'
  },
  {
    countryCode: 'AM',
    countryName: 'Armenia',
    currencyCode: 'AMD',
    population: '2968000',
    capital: 'Yerevan',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'hy'
  },
  {
    countryCode: 'AW',
    countryName: 'Aruba',
    currencyCode: 'AWG',
    population: '71566',
    capital: 'Oranjestad',
    continentName: 'North America',
    continent: 'NA',
    languages: 'nl-AW,pap,es,en'
  },
  {
    countryCode: 'AU',
    countryName: 'Australia',
    currencyCode: 'AUD',
    population: '21515754',
    capital: 'Canberra',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-AU'
  },
  {
    countryCode: 'AT',
    countryName: 'Austria',
    currencyCode: 'EUR',
    population: '8205000',
    capital: 'Vienna',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'de-AT,hr,hu,sl'
  },
  {
    countryCode: 'AZ',
    countryName: 'Azerbaijan',
    currencyCode: 'AZN',
    population: '8303512',
    capital: 'Baku',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'az,ru,hy'
  },
  {
    countryCode: 'BS',
    countryName: 'Bahamas',
    currencyCode: 'BSD',
    population: '301790',
    capital: 'Nassau',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-BS'
  },
  {
    countryCode: 'BH',
    countryName: 'Bahrain',
    currencyCode: 'BHD',
    population: '738004',
    capital: 'Manama',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-BH,en,fa,ur'
  },
  {
    countryCode: 'BD',
    countryName: 'Bangladesh',
    currencyCode: 'BDT',
    population: '156118464',
    capital: 'Dhaka',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'bn-BD,en'
  },
  {
    countryCode: 'BB',
    countryName: 'Barbados',
    currencyCode: 'BBD',
    population: '285653',
    capital: 'Bridgetown',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-BB'
  },
  {
    countryCode: 'BY',
    countryName: 'Belarus',
    currencyCode: 'BYN',
    population: '9685000',
    capital: 'Minsk',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'be,ru'
  },
  {
    countryCode: 'BE',
    countryName: 'Belgium',
    currencyCode: 'EUR',
    population: '10403000',
    capital: 'Brussels',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'nl-BE,fr-BE,de-BE'
  },
  {
    countryCode: 'BZ',
    countryName: 'Belize',
    currencyCode: 'BZD',
    population: '314522',
    capital: 'Belmopan',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-BZ,es'
  },
  {
    countryCode: 'BJ',
    countryName: 'Benin',
    currencyCode: 'XOF',
    population: '9056010',
    capital: 'Porto-Novo',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-BJ'
  },
  {
    countryCode: 'BM',
    countryName: 'Bermuda',
    currencyCode: 'BMD',
    population: '65365',
    capital: 'Hamilton',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-BM,pt'
  },
  {
    countryCode: 'BT',
    countryName: 'Bhutan',
    currencyCode: 'BTN',
    population: '699847',
    capital: 'Thimphu',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'dz'
  },
  {
    countryCode: 'BO',
    countryName: 'Bolivia',
    currencyCode: 'BOB',
    population: '9947418',
    capital: 'Sucre',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-BO,qu,ay'
  },
  {
    countryCode: 'BQ',
    countryName: 'Bonaire',
    currencyCode: 'USD',
    population: '18012',
    capital: 'Kralendijk',
    continentName: 'North America',
    continent: 'NA',
    languages: 'nl,pap,en'
  },
  {
    countryCode: 'BA',
    countryName: 'Bosnia and Herzegovina',
    currencyCode: 'BAM',
    population: '4590000',
    capital: 'Sarajevo',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'bs,hr-BA,sr-BA'
  },
  {
    countryCode: 'BW',
    countryName: 'Botswana',
    currencyCode: 'BWP',
    population: '2029307',
    capital: 'Gaborone',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-BW,tn-BW'
  },
  {
    countryCode: 'BV',
    countryName: 'Bouvet Island',
    currencyCode: 'NOK',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
    continent: 'AN',
    languages: ''
  },
  {
    countryCode: 'BR',
    countryName: 'Brazil',
    currencyCode: 'BRL',
    population: '201103330',
    capital: 'Brasília',
    continentName: 'South America',
    continent: 'SA',
    languages: 'pt-BR,es,en,fr'
  },
  {
    countryCode: 'IO',
    countryName: 'British Indian Ocean Territory',
    currencyCode: 'USD',
    population: '4000',
    capital: '',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'en-IO'
  },
  {
    countryCode: 'VG',
    countryName: 'British Virgin Islands',
    currencyCode: 'USD',
    population: '21730',
    capital: 'Road Town',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-VG'
  },
  {
    countryCode: 'BN',
    countryName: 'Brunei',
    currencyCode: 'BND',
    population: '395027',
    capital: 'Bandar Seri Begawan',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ms-BN,en-BN'
  },
  {
    countryCode: 'BG',
    countryName: 'Bulgaria',
    currencyCode: 'BGN',
    population: '7000039',
    capital: 'Sofia',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'bg,tr-BG,rom'
  },
  {
    countryCode: 'BF',
    countryName: 'Burkina Faso',
    currencyCode: 'XOF',
    population: '16241811',
    capital: 'Ouagadougou',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-BF,mos'
  },
  {
    countryCode: 'BI',
    countryName: 'Burundi',
    currencyCode: 'BIF',
    population: '9863117',
    capital: 'Bujumbura',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-BI,rn'
  },
  {
    countryCode: 'CV',
    countryName: 'Cabo Verde',
    currencyCode: 'CVE',
    population: '508659',
    capital: 'Praia',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'pt-CV'
  },
  {
    countryCode: 'KH',
    countryName: 'Cambodia',
    currencyCode: 'KHR',
    population: '14453680',
    capital: 'Phnom Penh',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'km,fr,en'
  },
  {
    countryCode: 'CM',
    countryName: 'Cameroon',
    currencyCode: 'XAF',
    population: '19294149',
    capital: 'Yaoundé',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-CM,fr-CM'
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    currencyCode: 'CAD',
    population: '33679000',
    capital: 'Ottawa',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-CA,fr-CA,iu'
  },
  {
    countryCode: 'KY',
    countryName: 'Cayman Islands',
    currencyCode: 'KYD',
    population: '44270',
    capital: 'George Town',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-KY'
  },
  {
    countryCode: 'CF',
    countryName: 'Central African Republic',
    currencyCode: 'XAF',
    population: '4844927',
    capital: 'Bangui',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-CF,sg,ln,kg'
  },
  {
    countryCode: 'TD',
    countryName: 'Chad',
    currencyCode: 'XAF',
    population: '10543464',
    capital: 'N\'Djamena',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-TD,ar-TD,sre'
  },
  {
    countryCode: 'CL',
    countryName: 'Chile',
    currencyCode: 'CLP',
    population: '16746491',
    capital: 'Santiago',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-CL'
  },
  {
    countryCode: 'CN',
    countryName: 'China',
    currencyCode: 'CNY',
    population: '1330044000',
    capital: 'Beijing',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'zh-CN,yue,wuu,dta,ug,za'
  },
  {
    countryCode: 'CX',
    countryName: 'Christmas Island',
    currencyCode: 'AUD',
    population: '1500',
    capital: 'Flying Fish Cove',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en,zh,ms-CC'
  },
  {
    countryCode: 'CC',
    countryName: 'Cocos [Keeling] Islands',
    currencyCode: 'AUD',
    population: '628',
    capital: 'West Island',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ms-CC,en'
  },
  {
    countryCode: 'CO',
    countryName: 'Colombia',
    currencyCode: 'COP',
    population: '47790000',
    capital: 'Bogotá',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-CO'
  },
  {
    countryCode: 'KM',
    countryName: 'Comoros',
    currencyCode: 'KMF',
    population: '773407',
    capital: 'Moroni',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar,fr-KM'
  },
  {
    countryCode: 'CK',
    countryName: 'Cook Islands',
    currencyCode: 'NZD',
    population: '21388',
    capital: 'Avarua',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-CK,mi'
  },
  {
    countryCode: 'CR',
    countryName: 'Costa Rica',
    currencyCode: 'CRC',
    population: '4516220',
    capital: 'San José',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-CR,en'
  },
  {
    countryCode: 'HR',
    countryName: 'Croatia',
    currencyCode: 'HRK',
    population: '4284889',
    capital: 'Zagreb',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'hr-HR,sr'
  },
  {
    countryCode: 'CU',
    countryName: 'Cuba',
    currencyCode: 'CUP',
    population: '11423000',
    capital: 'Havana',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-CU,pap'
  },
  {
    countryCode: 'CW',
    countryName: 'Curacao',
    currencyCode: 'ANG',
    population: '141766',
    capital: 'Willemstad',
    continentName: 'North America',
    continent: 'NA',
    languages: 'nl,pap'
  },
  {
    countryCode: 'CY',
    countryName: 'Cyprus',
    currencyCode: 'EUR',
    population: '1102677',
    capital: 'Nicosia',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'el-CY,tr-CY,en'
  },
  {
    countryCode: 'CZ',
    countryName: 'Czechia',
    currencyCode: 'CZK',
    population: '10476000',
    capital: 'Prague',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'cs,sk'
  },
  {
    countryCode: 'CD',
    countryName: 'Democratic Republic of the Congo',
    currencyCode: 'CDF',
    population: '70916439',
    capital: 'Kinshasa',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-CD,ln,ktu,kg,sw,lua'
  },
  {
    countryCode: 'DK',
    countryName: 'Denmark',
    currencyCode: 'DKK',
    population: '5484000',
    capital: 'Copenhagen',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'da-DK,en,fo,de-DK'
  },
  {
    countryCode: 'DJ',
    countryName: 'Djibouti',
    currencyCode: 'DJF',
    population: '740528',
    capital: 'Djibouti',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-DJ,ar,so-DJ,aa'
  },
  {
    countryCode: 'DM',
    countryName: 'Dominica',
    currencyCode: 'XCD',
    population: '72813',
    capital: 'Roseau',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-DM'
  },
  {
    countryCode: 'DO',
    countryName: 'Dominican Republic',
    currencyCode: 'DOP',
    population: '9823821',
    capital: 'Santo Domingo',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-DO'
  },
  {
    countryCode: 'EC',
    countryName: 'Ecuador',
    currencyCode: 'USD',
    population: '14790608',
    capital: 'Quito',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-EC'
  },
  {
    countryCode: 'EG',
    countryName: 'Egypt',
    currencyCode: 'EGP',
    population: '80471869',
    capital: 'Cairo',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-EG,en,fr'
  },
  {
    countryCode: 'SV',
    countryName: 'El Salvador',
    currencyCode: 'USD',
    population: '6052064',
    capital: 'San Salvador',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-SV'
  },
  {
    countryCode: 'GQ',
    countryName: 'Equatorial Guinea',
    currencyCode: 'XAF',
    population: '1014999',
    capital: 'Malabo',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'es-GQ,fr'
  },
  {
    countryCode: 'ER',
    countryName: 'Eritrea',
    currencyCode: 'ERN',
    population: '5792984',
    capital: 'Asmara',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'aa-ER,ar,tig,kun,ti-ER'
  },
  {
    countryCode: 'EE',
    countryName: 'Estonia',
    currencyCode: 'EUR',
    population: '1291170',
    capital: 'Tallinn',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'et,ru'
  },
  {
    countryCode: 'SZ',
    countryName: 'Eswatini',
    currencyCode: 'SZL',
    population: '1354051',
    capital: 'Mbabane',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-SZ,ss-SZ'
  },
  {
    countryCode: 'ET',
    countryName: 'Ethiopia',
    currencyCode: 'ETB',
    population: '88013491',
    capital: 'Addis Ababa',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'am,en-ET,om-ET,ti-ET,so-ET,sid'
  },
  {
    countryCode: 'FK',
    countryName: 'Falkland Islands',
    currencyCode: 'FKP',
    population: '2638',
    capital: 'Stanley',
    continentName: 'South America',
    continent: 'SA',
    languages: 'en-FK'
  },
  {
    countryCode: 'FO',
    countryName: 'Faroe Islands',
    currencyCode: 'DKK',
    population: '48228',
    capital: 'Tórshavn',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'fo,da-FO'
  },
  {
    countryCode: 'FJ',
    countryName: 'Fiji',
    currencyCode: 'FJD',
    population: '875983',
    capital: 'Suva',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-FJ,fj'
  },
  {
    countryCode: 'FI',
    countryName: 'Finland',
    currencyCode: 'EUR',
    population: '5244000',
    capital: 'Helsinki',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'fi-FI,sv-FI,smn'
  },
  {
    countryCode: 'FR',
    countryName: 'France',
    currencyCode: 'EUR',
    population: '64768389',
    capital: 'Paris',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'fr-FR,frp,br,co,ca,eu,oc'
  },
  {
    countryCode: 'GF',
    countryName: 'French Guiana',
    currencyCode: 'EUR',
    population: '195506',
    capital: 'Cayenne',
    continentName: 'South America',
    continent: 'SA',
    languages: 'fr-GF'
  },
  {
    countryCode: 'PF',
    countryName: 'French Polynesia',
    currencyCode: 'XPF',
    population: '270485',
    capital: 'Papeete',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'fr-PF,ty'
  },
  {
    countryCode: 'TF',
    countryName: 'French Southern Territories',
    currencyCode: 'EUR',
    population: '140',
    capital: 'Port-aux-Français',
    continentName: 'Antarctica',
    continent: 'AN',
    languages: 'fr'
  },
  {
    countryCode: 'GA',
    countryName: 'Gabon',
    currencyCode: 'XAF',
    population: '1545255',
    capital: 'Libreville',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-GA'
  },
  {
    countryCode: 'GM',
    countryName: 'Gambia',
    currencyCode: 'GMD',
    population: '1593256',
    capital: 'Bathurst',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-GM,mnk,wof,wo,ff'
  },
  {
    countryCode: 'GE',
    countryName: 'Georgia',
    currencyCode: 'GEL',
    population: '4630000',
    capital: 'Tbilisi',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ka,ru,hy,az'
  },
  {
    countryCode: 'DE',
    countryName: 'Germany',
    currencyCode: 'EUR',
    population: '81802257',
    capital: 'Berlin',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'de'
  },
  {
    countryCode: 'GH',
    countryName: 'Ghana',
    currencyCode: 'GHS',
    population: '24339838',
    capital: 'Accra',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-GH,ak,ee,tw'
  },
  {
    countryCode: 'GI',
    countryName: 'Gibraltar',
    currencyCode: 'GIP',
    population: '27884',
    capital: 'Gibraltar',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en-GI,es,it,pt'
  },
  {
    countryCode: 'GR',
    countryName: 'Greece',
    currencyCode: 'EUR',
    population: '11000000',
    capital: 'Athens',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'el-GR,en,fr'
  },
  {
    countryCode: 'GL',
    countryName: 'Greenland',
    currencyCode: 'DKK',
    population: '56375',
    capital: 'Nuuk',
    continentName: 'North America',
    continent: 'NA',
    languages: 'kl,da-GL,en'
  },
  {
    countryCode: 'GD',
    countryName: 'Grenada',
    currencyCode: 'XCD',
    population: '107818',
    capital: 'St. George\'s',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-GD'
  },
  {
    countryCode: 'GP',
    countryName: 'Guadeloupe',
    currencyCode: 'EUR',
    population: '443000',
    capital: 'Basse-Terre',
    continentName: 'North America',
    continent: 'NA',
    languages: 'fr-GP'
  },
  {
    countryCode: 'GU',
    countryName: 'Guam',
    currencyCode: 'USD',
    population: '159358',
    capital: 'Hagåtña',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-GU,ch-GU'
  },
  {
    countryCode: 'GT',
    countryName: 'Guatemala',
    currencyCode: 'GTQ',
    population: '13550440',
    capital: 'Guatemala City',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-GT'
  },
  {
    countryCode: 'GG',
    countryName: 'Guernsey',
    currencyCode: 'GBP',
    population: '65228',
    capital: 'St Peter Port',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en,nrf'
  },
  {
    countryCode: 'GN',
    countryName: 'Guinea',
    currencyCode: 'GNF',
    population: '10324025',
    capital: 'Conakry',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-GN'
  },
  {
    countryCode: 'GW',
    countryName: 'Guinea-Bissau',
    currencyCode: 'XOF',
    population: '1565126',
    capital: 'Bissau',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'pt-GW,pov'
  },
  {
    countryCode: 'GY',
    countryName: 'Guyana',
    currencyCode: 'GYD',
    population: '748486',
    capital: 'Georgetown',
    continentName: 'South America',
    continent: 'SA',
    languages: 'en-GY'
  },
  {
    countryCode: 'HT',
    countryName: 'Haiti',
    currencyCode: 'HTG',
    population: '9648924',
    capital: 'Port-au-Prince',
    continentName: 'North America',
    continent: 'NA',
    languages: 'ht,fr-HT'
  },
  {
    countryCode: 'HM',
    countryName: 'Heard Island and McDonald Islands',
    currencyCode: 'AUD',
    population: '0',
    capital: '',
    continentName: 'Antarctica',
    continent: 'AN',
    languages: ''
  },
  {
    countryCode: 'HN',
    countryName: 'Honduras',
    currencyCode: 'HNL',
    population: '7989415',
    capital: 'Tegucigalpa',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-HN,cab,miq'
  },
  {
    countryCode: 'HK',
    countryName: 'Hong Kong',
    currencyCode: 'HKD',
    population: '6898686',
    capital: 'Hong Kong',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'zh-HK,yue,zh,en'
  },
  {
    countryCode: 'HU',
    countryName: 'Hungary',
    currencyCode: 'HUF',
    population: '9982000',
    capital: 'Budapest',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'hu-HU'
  },
  {
    countryCode: 'IS',
    countryName: 'Iceland',
    currencyCode: 'ISK',
    population: '308910',
    capital: 'Reykjavik',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'is,en,de,da,sv,no'
  },
  {
    countryCode: 'IN',
    countryName: 'India',
    currencyCode: 'INR',
    population: '1173108018',
    capital: 'New Delhi',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc'
  },
  {
    countryCode: 'ID',
    countryName: 'Indonesia',
    currencyCode: 'IDR',
    population: '242968342',
    capital: 'Jakarta',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'id,en,nl,jv'
  },
  {
    countryCode: 'IR',
    countryName: 'Iran',
    currencyCode: 'IRR',
    population: '76923300',
    capital: 'Tehran',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'fa-IR,ku'
  },
  {
    countryCode: 'IQ',
    countryName: 'Iraq',
    currencyCode: 'IQD',
    population: '29671605',
    capital: 'Baghdad',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-IQ,ku,hy'
  },
  {
    countryCode: 'IE',
    countryName: 'Ireland',
    currencyCode: 'EUR',
    population: '4622917',
    capital: 'Dublin',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en-IE,ga-IE'
  },
  {
    countryCode: 'IM',
    countryName: 'Isle of Man',
    currencyCode: 'GBP',
    population: '75049',
    capital: 'Douglas',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en,gv'
  },
  {
    countryCode: 'IL',
    countryName: 'Israel',
    currencyCode: 'ILS',
    population: '7353985',
    capital: '',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'he,ar-IL,en-IL,'
  },
  {
    countryCode: 'IT',
    countryName: 'Italy',
    currencyCode: 'EUR',
    population: '60340328',
    capital: 'Rome',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'it-IT,de-IT,fr-IT,sc,ca,co,sl'
  },
  {
    countryCode: 'CI',
    countryName: 'Ivory Coast',
    currencyCode: 'XOF',
    population: '21058798',
    capital: 'Yamoussoukro',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-CI'
  },
  {
    countryCode: 'JM',
    countryName: 'Jamaica',
    currencyCode: 'JMD',
    population: '2847232',
    capital: 'Kingston',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-JM'
  },
  {
    countryCode: 'JP',
    countryName: 'Japan',
    currencyCode: 'JPY',
    population: '127288000',
    capital: 'Tokyo',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ja'
  },
  {
    countryCode: 'JE',
    countryName: 'Jersey',
    currencyCode: 'GBP',
    population: '90812',
    capital: 'Saint Helier',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en,fr,nrf'
  },
  {
    countryCode: 'JO',
    countryName: 'Jordan',
    currencyCode: 'JOD',
    population: '6407085',
    capital: 'Amman',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-JO,en'
  },
  {
    countryCode: 'KZ',
    countryName: 'Kazakhstan',
    currencyCode: 'KZT',
    population: '15340000',
    capital: 'Astana',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'kk,ru'
  },
  {
    countryCode: 'KE',
    countryName: 'Kenya',
    currencyCode: 'KES',
    population: '40046566',
    capital: 'Nairobi',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-KE,sw-KE'
  },
  {
    countryCode: 'KI',
    countryName: 'Kiribati',
    currencyCode: 'AUD',
    population: '92533',
    capital: 'Tarawa',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-KI,gil'
  },
  {
    countryCode: 'XK',
    countryName: 'Kosovo',
    currencyCode: 'EUR',
    population: '1800000',
    capital: 'Pristina',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sq,sr'
  },
  {
    countryCode: 'KW',
    countryName: 'Kuwait',
    currencyCode: 'KWD',
    population: '2789132',
    capital: 'Kuwait City',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-KW,en'
  },
  {
    countryCode: 'KG',
    countryName: 'Kyrgyzstan',
    currencyCode: 'KGS',
    population: '5776500',
    capital: 'Bishkek',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ky,uz,ru'
  },
  {
    countryCode: 'LA',
    countryName: 'Laos',
    currencyCode: 'LAK',
    population: '6368162',
    capital: 'Vientiane',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'lo,fr,en'
  },
  {
    countryCode: 'LV',
    countryName: 'Latvia',
    currencyCode: 'EUR',
    population: '2217969',
    capital: 'Riga',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'lv,ru,lt'
  },
  {
    countryCode: 'LB',
    countryName: 'Lebanon',
    currencyCode: 'LBP',
    population: '4125247',
    capital: 'Beirut',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-LB,fr-LB,en,hy'
  },
  {
    countryCode: 'LS',
    countryName: 'Lesotho',
    currencyCode: 'LSL',
    population: '1919552',
    capital: 'Maseru',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-LS,st,zu,xh'
  },
  {
    countryCode: 'LR',
    countryName: 'Liberia',
    currencyCode: 'LRD',
    population: '3685076',
    capital: 'Monrovia',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-LR'
  },
  {
    countryCode: 'LY',
    countryName: 'Libya',
    currencyCode: 'LYD',
    population: '6461454',
    capital: 'Tripoli',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-LY,it,en'
  },
  {
    countryCode: 'LI',
    countryName: 'Liechtenstein',
    currencyCode: 'CHF',
    population: '35000',
    capital: 'Vaduz',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'de-LI'
  },
  {
    countryCode: 'LT',
    countryName: 'Lithuania',
    currencyCode: 'EUR',
    population: '2944459',
    capital: 'Vilnius',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'lt,ru,pl'
  },
  {
    countryCode: 'LU',
    countryName: 'Luxembourg',
    currencyCode: 'EUR',
    population: '497538',
    capital: 'Luxembourg',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'lb,de-LU,fr-LU'
  },
  {
    countryCode: 'MO',
    countryName: 'Macao',
    currencyCode: 'MOP',
    population: '449198',
    capital: 'Macao',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'zh,zh-MO,pt'
  },
  {
    countryCode: 'MG',
    countryName: 'Madagascar',
    currencyCode: 'MGA',
    population: '21281844',
    capital: 'Antananarivo',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-MG,mg'
  },
  {
    countryCode: 'MW',
    countryName: 'Malawi',
    currencyCode: 'MWK',
    population: '17563749',
    capital: 'Lilongwe',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ny,yao,tum,swk'
  },
  {
    countryCode: 'MY',
    countryName: 'Malaysia',
    currencyCode: 'MYR',
    population: '28274729',
    capital: 'Kuala Lumpur',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ms-MY,en,zh,ta,te,ml,pa,th'
  },
  {
    countryCode: 'MV',
    countryName: 'Maldives',
    currencyCode: 'MVR',
    population: '395650',
    capital: 'Malé',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'dv,en'
  },
  {
    countryCode: 'ML',
    countryName: 'Mali',
    currencyCode: 'XOF',
    population: '13796354',
    capital: 'Bamako',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-ML,bm'
  },
  {
    countryCode: 'MT',
    countryName: 'Malta',
    currencyCode: 'EUR',
    population: '403000',
    capital: 'Valletta',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'mt,en-MT'
  },
  {
    countryCode: 'MH',
    countryName: 'Marshall Islands',
    currencyCode: 'USD',
    population: '65859',
    capital: 'Majuro',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'mh,en-MH'
  },
  {
    countryCode: 'MQ',
    countryName: 'Martinique',
    currencyCode: 'EUR',
    population: '432900',
    capital: 'Fort-de-France',
    continentName: 'North America',
    continent: 'NA',
    languages: 'fr-MQ'
  },
  {
    countryCode: 'MR',
    countryName: 'Mauritania',
    currencyCode: 'MRO',
    population: '3205060',
    capital: 'Nouakchott',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-MR,fuc,snk,fr,mey,wo'
  },
  {
    countryCode: 'MU',
    countryName: 'Mauritius',
    currencyCode: 'MUR',
    population: '1294104',
    capital: 'Port Louis',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-MU,bho,fr'
  },
  {
    countryCode: 'YT',
    countryName: 'Mayotte',
    currencyCode: 'EUR',
    population: '159042',
    capital: 'Mamoudzou',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-YT'
  },
  {
    countryCode: 'MX',
    countryName: 'Mexico',
    currencyCode: 'MXN',
    population: '112468855',
    capital: 'Mexico City',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-MX'
  },
  {
    countryCode: 'FM',
    countryName: 'Micronesia',
    currencyCode: 'USD',
    population: '107708',
    capital: 'Palikir',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-FM,chk,pon,yap,kos,uli,woe,nkr,kpg'
  },
  {
    countryCode: 'MD',
    countryName: 'Moldova',
    currencyCode: 'MDL',
    population: '4324000',
    capital: 'Chişinău',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'ro,ru,gag,tr'
  },
  {
    countryCode: 'MC',
    countryName: 'Monaco',
    currencyCode: 'EUR',
    population: '32965',
    capital: 'Monaco',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'fr-MC,en,it'
  },
  {
    countryCode: 'MN',
    countryName: 'Mongolia',
    currencyCode: 'MNT',
    population: '3086918',
    capital: 'Ulan Bator',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'mn,ru'
  },
  {
    countryCode: 'ME',
    countryName: 'Montenegro',
    currencyCode: 'EUR',
    population: '666730',
    capital: 'Podgorica',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sr,hu,bs,sq,hr,rom'
  },
  {
    countryCode: 'MS',
    countryName: 'Montserrat',
    currencyCode: 'XCD',
    population: '9341',
    capital: 'Plymouth',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-MS'
  },
  {
    countryCode: 'MA',
    countryName: 'Morocco',
    currencyCode: 'MAD',
    population: '33848242',
    capital: 'Rabat',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-MA,ber,fr'
  },
  {
    countryCode: 'MZ',
    countryName: 'Mozambique',
    currencyCode: 'MZN',
    population: '22061451',
    capital: 'Maputo',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'pt-MZ,vmw'
  },
  {
    countryCode: 'MM',
    countryName: 'Myanmar [Burma]',
    currencyCode: 'MMK',
    population: '53414374',
    capital: 'Naypyitaw',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'my'
  },
  {
    countryCode: 'NA',
    countryName: 'Namibia',
    currencyCode: 'NAD',
    population: '2128471',
    capital: 'Windhoek',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-NA,af,de,hz,naq'
  },
  {
    countryCode: 'NR',
    countryName: 'Nauru',
    currencyCode: 'AUD',
    population: '10065',
    capital: 'Yaren',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'na,en-NR'
  },
  {
    countryCode: 'NP',
    countryName: 'Nepal',
    currencyCode: 'NPR',
    population: '28951852',
    capital: 'Kathmandu',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ne,en'
  },
  {
    countryCode: 'NL',
    countryName: 'Netherlands',
    currencyCode: 'EUR',
    population: '16645000',
    capital: 'Amsterdam',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'nl-NL,fy-NL'
  },
  {
    countryCode: 'NC',
    countryName: 'New Caledonia',
    currencyCode: 'XPF',
    population: '216494',
    capital: 'Noumea',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'fr-NC'
  },
  {
    countryCode: 'NZ',
    countryName: 'New Zealand',
    currencyCode: 'NZD',
    population: '4252277',
    capital: 'Wellington',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-NZ,mi'
  },
  {
    countryCode: 'NI',
    countryName: 'Nicaragua',
    currencyCode: 'NIO',
    population: '5995928',
    capital: 'Managua',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-NI,en'
  },
  {
    countryCode: 'NE',
    countryName: 'Niger',
    currencyCode: 'XOF',
    population: '15878271',
    capital: 'Niamey',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-NE,ha,kr,dje'
  },
  {
    countryCode: 'NG',
    countryName: 'Nigeria',
    currencyCode: 'NGN',
    population: '154000000',
    capital: 'Abuja',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-NG,ha,yo,ig,ff'
  },
  {
    countryCode: 'NU',
    countryName: 'Niue',
    currencyCode: 'NZD',
    population: '2166',
    capital: 'Alofi',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'niu,en-NU'
  },
  {
    countryCode: 'NF',
    countryName: 'Norfolk Island',
    currencyCode: 'AUD',
    population: '1828',
    capital: 'Kingston',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-NF'
  },
  {
    countryCode: 'KP',
    countryName: 'North Korea',
    currencyCode: 'KPW',
    population: '22912177',
    capital: 'Pyongyang',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ko-KP'
  },
  {
    countryCode: 'MK',
    countryName: 'North Macedonia',
    currencyCode: 'MKD',
    population: '2062294',
    capital: 'Skopje',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'mk,sq,tr,rmm,sr'
  },
  {
    countryCode: 'MP',
    countryName: 'Northern Mariana Islands',
    currencyCode: 'USD',
    population: '53883',
    capital: 'Saipan',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'fil,tl,zh,ch-MP,en-MP'
  },
  {
    countryCode: 'NO',
    countryName: 'Norway',
    currencyCode: 'NOK',
    population: '5009150',
    capital: 'Oslo',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'no,nb,nn,se,fi'
  },
  {
    countryCode: 'OM',
    countryName: 'Oman',
    currencyCode: 'OMR',
    population: '2967717',
    capital: 'Muscat',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-OM,en,bal,ur'
  },
  {
    countryCode: 'PK',
    countryName: 'Pakistan',
    currencyCode: 'PKR',
    population: '184404791',
    capital: 'Islamabad',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ur-PK,en-PK,pa,sd,ps,brh'
  },
  {
    countryCode: 'PW',
    countryName: 'Palau',
    currencyCode: 'USD',
    population: '19907',
    capital: 'Melekeok',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'pau,sov,en-PW,tox,ja,fil,zh'
  },
  {
    countryCode: 'PS',
    countryName: 'Palestine',
    currencyCode: 'ILS',
    population: '3800000',
    capital: '',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-PS'
  },
  {
    countryCode: 'PA',
    countryName: 'Panama',
    currencyCode: 'PAB',
    population: '3410676',
    capital: 'Panama City',
    continentName: 'North America',
    continent: 'NA',
    languages: 'es-PA,en'
  },
  {
    countryCode: 'PG',
    countryName: 'Papua New Guinea',
    currencyCode: 'PGK',
    population: '6064515',
    capital: 'Port Moresby',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-PG,ho,meu,tpi'
  },
  {
    countryCode: 'PY',
    countryName: 'Paraguay',
    currencyCode: 'PYG',
    population: '6375830',
    capital: 'Asunción',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-PY,gn'
  },
  {
    countryCode: 'PE',
    countryName: 'Peru',
    currencyCode: 'PEN',
    population: '29907003',
    capital: 'Lima',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-PE,qu,ay'
  },
  {
    countryCode: 'PH',
    countryName: 'Philippines',
    currencyCode: 'PHP',
    population: '99900177',
    capital: 'Manila',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'tl,en-PH,fil,ceb,tgl,ilo,hil,war,pam,bik,bcl,pag,mrw,tsg,mdh,cbk,krj,sgd,msb,akl,ibg,yka,mta,abx'
  },
  {
    countryCode: 'PN',
    countryName: 'Pitcairn Islands',
    currencyCode: 'NZD',
    population: '46',
    capital: 'Adamstown',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-PN'
  },
  {
    countryCode: 'PL',
    countryName: 'Poland',
    currencyCode: 'PLN',
    population: '38500000',
    capital: 'Warsaw',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'pl'
  },
  {
    countryCode: 'PT',
    countryName: 'Portugal',
    currencyCode: 'EUR',
    population: '10676000',
    capital: 'Lisbon',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'pt-PT,mwl'
  },
  {
    countryCode: 'PR',
    countryName: 'Puerto Rico',
    currencyCode: 'USD',
    population: '3916632',
    capital: 'San Juan',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-PR,es-PR'
  },
  {
    countryCode: 'QA',
    countryName: 'Qatar',
    currencyCode: 'QAR',
    population: '840926',
    capital: 'Doha',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-QA,es'
  },
  {
    countryCode: 'CG',
    countryName: 'Republic of the Congo',
    currencyCode: 'XAF',
    population: '3039126',
    capital: 'Brazzaville',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-CG,kg,ln-CG'
  },
  {
    countryCode: 'RO',
    countryName: 'Romania',
    currencyCode: 'RON',
    population: '21959278',
    capital: 'Bucharest',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'ro,hu,rom'
  },
  {
    countryCode: 'RU',
    countryName: 'Russia',
    currencyCode: 'RUB',
    population: '140702000',
    capital: 'Moscow',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'ru,tt,xal,cau,ady,kv,ce,tyv,cv,udm,tut,mns,bua,myv,mdf,chm,ba,inh,tut,kbd,krc,av,sah,nog'
  },
  {
    countryCode: 'RW',
    countryName: 'Rwanda',
    currencyCode: 'RWF',
    population: '11055976',
    capital: 'Kigali',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'rw,en-RW,fr-RW,sw'
  },
  {
    countryCode: 'RE',
    countryName: 'Réunion',
    currencyCode: 'EUR',
    population: '776948',
    capital: 'Saint-Denis',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-RE'
  },
  {
    countryCode: 'BL',
    countryName: 'Saint Barthélemy',
    currencyCode: 'EUR',
    population: '8450',
    capital: 'Gustavia',
    continentName: 'North America',
    continent: 'NA',
    languages: 'fr'
  },
  {
    countryCode: 'SH',
    countryName: 'Saint Helena',
    currencyCode: 'SHP',
    population: '7460',
    capital: 'Jamestown',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-SH'
  },
  {
    countryCode: 'KN',
    countryName: 'Saint Kitts and Nevis',
    currencyCode: 'XCD',
    population: '51134',
    capital: 'Basseterre',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-KN'
  },
  {
    countryCode: 'LC',
    countryName: 'Saint Lucia',
    currencyCode: 'XCD',
    population: '160922',
    capital: 'Castries',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-LC'
  },
  {
    countryCode: 'MF',
    countryName: 'Saint Martin',
    currencyCode: 'EUR',
    population: '35925',
    capital: 'Marigot',
    continentName: 'North America',
    continent: 'NA',
    languages: 'fr'
  },
  {
    countryCode: 'PM',
    countryName: 'Saint Pierre and Miquelon',
    currencyCode: 'EUR',
    population: '7012',
    capital: 'Saint-Pierre',
    continentName: 'North America',
    continent: 'NA',
    languages: 'fr-PM'
  },
  {
    countryCode: 'VC',
    countryName: 'Saint Vincent and the Grenadines',
    currencyCode: 'XCD',
    population: '104217',
    capital: 'Kingstown',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-VC,fr'
  },
  {
    countryCode: 'WS',
    countryName: 'Samoa',
    currencyCode: 'WST',
    population: '192001',
    capital: 'Apia',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'sm,en-WS'
  },
  {
    countryCode: 'SM',
    countryName: 'San Marino',
    currencyCode: 'EUR',
    population: '31477',
    capital: 'San Marino',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'it-SM'
  },
  {
    countryCode: 'SA',
    countryName: 'Saudi Arabia',
    currencyCode: 'SAR',
    population: '25731776',
    capital: 'Riyadh',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-SA'
  },
  {
    countryCode: 'SN',
    countryName: 'Senegal',
    currencyCode: 'XOF',
    population: '12323252',
    capital: 'Dakar',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-SN,wo,fuc,mnk'
  },
  {
    countryCode: 'RS',
    countryName: 'Serbia',
    currencyCode: 'RSD',
    population: '7344847',
    capital: 'Belgrade',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sr,hu,bs,rom'
  },
  {
    countryCode: 'SC',
    countryName: 'Seychelles',
    currencyCode: 'SCR',
    population: '88340',
    capital: 'Victoria',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-SC,fr-SC'
  },
  {
    countryCode: 'SL',
    countryName: 'Sierra Leone',
    currencyCode: 'SLL',
    population: '5245695',
    capital: 'Freetown',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-SL,men,tem'
  },
  {
    countryCode: 'SG',
    countryName: 'Singapore',
    currencyCode: 'SGD',
    population: '4701069',
    capital: 'Singapore',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'cmn,en-SG,ms-SG,ta-SG,zh-SG'
  },
  {
    countryCode: 'SX',
    countryName: 'Sint Maarten',
    currencyCode: 'ANG',
    population: '37429',
    capital: 'Philipsburg',
    continentName: 'North America',
    continent: 'NA',
    languages: 'nl,en'
  },
  {
    countryCode: 'SK',
    countryName: 'Slovakia',
    currencyCode: 'EUR',
    population: '5455000',
    capital: 'Bratislava',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sk,hu'
  },
  {
    countryCode: 'SI',
    countryName: 'Slovenia',
    currencyCode: 'EUR',
    population: '2007000',
    capital: 'Ljubljana',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sl,sh'
  },
  {
    countryCode: 'SB',
    countryName: 'Solomon Islands',
    currencyCode: 'SBD',
    population: '559198',
    capital: 'Honiara',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-SB,tpi'
  },
  {
    countryCode: 'SO',
    countryName: 'Somalia',
    currencyCode: 'SOS',
    population: '10112453',
    capital: 'Mogadishu',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'so-SO,ar-SO,it,en-SO'
  },
  {
    countryCode: 'ZA',
    countryName: 'South Africa',
    currencyCode: 'ZAR',
    population: '49000000',
    capital: 'Pretoria',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'zu,xh,af,nso,en-ZA,tn,st,ts,ss,ve,nr'
  },
  {
    countryCode: 'GS',
    countryName: 'South Georgia and the South Sandwich Islands',
    currencyCode: 'GBP',
    population: '30',
    capital: 'Grytviken',
    continentName: 'Antarctica',
    continent: 'AN',
    languages: 'en'
  },
  {
    countryCode: 'KR',
    countryName: 'South Korea',
    currencyCode: 'KRW',
    population: '48422644',
    capital: 'Seoul',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ko-KR,en'
  },
  {
    countryCode: 'SS',
    countryName: 'South Sudan',
    currencyCode: 'SSP',
    population: '8260490',
    capital: 'Juba',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en'
  },
  {
    countryCode: 'ES',
    countryName: 'Spain',
    currencyCode: 'EUR',
    population: '46505963',
    capital: 'Madrid',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'es-ES,ca,gl,eu,oc'
  },
  {
    countryCode: 'LK',
    countryName: 'Sri Lanka',
    currencyCode: 'LKR',
    population: '21513990',
    capital: 'Colombo',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'si,ta,en'
  },
  {
    countryCode: 'SD',
    countryName: 'Sudan',
    currencyCode: 'SDG',
    population: '35000000',
    capital: 'Khartoum',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-SD,en,fia'
  },
  {
    countryCode: 'SR',
    countryName: 'Suriname',
    currencyCode: 'SRD',
    population: '492829',
    capital: 'Paramaribo',
    continentName: 'South America',
    continent: 'SA',
    languages: 'nl-SR,en,srn,hns,jv'
  },
  {
    countryCode: 'SJ',
    countryName: 'Svalbard and Jan Mayen',
    currencyCode: 'NOK',
    population: '2550',
    capital: 'Longyearbyen',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'no,ru'
  },
  {
    countryCode: 'SE',
    countryName: 'Sweden',
    currencyCode: 'SEK',
    population: '9828655',
    capital: 'Stockholm',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sv-SE,se,sma,fi-SE'
  },
  {
    countryCode: 'CH',
    countryName: 'Switzerland',
    currencyCode: 'CHF',
    population: '8484100',
    capital: 'Bern',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'de-CH,fr-CH,it-CH,rm'
  },
  {
    countryCode: 'SY',
    countryName: 'Syria',
    currencyCode: 'SYP',
    population: '22198110',
    capital: 'Damascus',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-SY,ku,hy,arc,fr,en'
  },
  {
    countryCode: 'ST',
    countryName: 'São Tomé and Príncipe',
    currencyCode: 'STD',
    population: '197700',
    capital: 'São Tomé',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'pt-ST'
  },
  {
    countryCode: 'TW',
    countryName: 'Taiwan',
    currencyCode: 'TWD',
    population: '22894384',
    capital: 'Taipei',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'zh-TW,zh,nan,hak'
  },
  {
    countryCode: 'TJ',
    countryName: 'Tajikistan',
    currencyCode: 'TJS',
    population: '7487489',
    capital: 'Dushanbe',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'tg,ru'
  },
  {
    countryCode: 'TZ',
    countryName: 'Tanzania',
    currencyCode: 'TZS',
    population: '41892895',
    capital: 'Dodoma',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'sw-TZ,en,ar'
  },
  {
    countryCode: 'TH',
    countryName: 'Thailand',
    currencyCode: 'THB',
    population: '67089500',
    capital: 'Bangkok',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'th,en'
  },
  {
    countryCode: 'TL',
    countryName: 'Timor-Leste',
    currencyCode: 'USD',
    population: '1154625',
    capital: 'Dili',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'tet,pt-TL,id,en'
  },
  {
    countryCode: 'TG',
    countryName: 'Togo',
    currencyCode: 'XOF',
    population: '6587239',
    capital: 'Lomé',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'fr-TG,ee,hna,kbp,dag,ha'
  },
  {
    countryCode: 'TK',
    countryName: 'Tokelau',
    currencyCode: 'NZD',
    population: '1466',
    capital: '',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'tkl,en-TK'
  },
  {
    countryCode: 'TO',
    countryName: 'Tonga',
    currencyCode: 'TOP',
    population: '122580',
    capital: 'Nuku\'alofa',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'to,en-TO'
  },
  {
    countryCode: 'TT',
    countryName: 'Trinidad and Tobago',
    currencyCode: 'TTD',
    population: '1328019',
    capital: 'Port of Spain',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-TT,hns,fr,es,zh'
  },
  {
    countryCode: 'TN',
    countryName: 'Tunisia',
    currencyCode: 'TND',
    population: '10589025',
    capital: 'Tunis',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar-TN,fr'
  },
  {
    countryCode: 'TR',
    countryName: 'Turkey',
    currencyCode: 'TRY',
    population: '77804122',
    capital: 'Ankara',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'tr-TR,ku,diq,az,av'
  },
  {
    countryCode: 'TM',
    countryName: 'Turkmenistan',
    currencyCode: 'TMT',
    population: '4940916',
    capital: 'Ashgabat',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'tk,ru,uz'
  },
  {
    countryCode: 'TC',
    countryName: 'Turks and Caicos Islands',
    currencyCode: 'USD',
    population: '20556',
    capital: 'Cockburn Town',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-TC'
  },
  {
    countryCode: 'TV',
    countryName: 'Tuvalu',
    currencyCode: 'AUD',
    population: '10472',
    capital: 'Funafuti',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'tvl,en,sm,gil'
  },
  {
    countryCode: 'UM',
    countryName: 'U.S. Minor Outlying Islands',
    currencyCode: 'USD',
    population: '0',
    capital: '',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'en-UM'
  },
  {
    countryCode: 'VI',
    countryName: 'U.S. Virgin Islands',
    currencyCode: 'USD',
    population: '108708',
    capital: 'Charlotte Amalie',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-VI'
  },
  {
    countryCode: 'UG',
    countryName: 'Uganda',
    currencyCode: 'UGX',
    population: '33398682',
    capital: 'Kampala',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-UG,lg,sw,ar'
  },
  {
    countryCode: 'UA',
    countryName: 'Ukraine',
    currencyCode: 'UAH',
    population: '45415596',
    capital: 'Kiev',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'uk,ru-UA,rom,pl,hu'
  },
  {
    countryCode: 'AE',
    countryName: 'United Arab Emirates',
    currencyCode: 'AED',
    population: '4975593',
    capital: 'Abu Dhabi',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-AE,fa,en,hi,ur'
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    currencyCode: 'GBP',
    population: '62348447',
    capital: 'London',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'en-GB,cy-GB,gd'
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    currencyCode: 'USD',
    population: '310232863',
    capital: 'Washington',
    continentName: 'North America',
    continent: 'NA',
    languages: 'en-US,es-US,haw,fr'
  },
  {
    countryCode: 'UY',
    countryName: 'Uruguay',
    currencyCode: 'UYU',
    population: '3477000',
    capital: 'Montevideo',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-UY'
  },
  {
    countryCode: 'UZ',
    countryName: 'Uzbekistan',
    currencyCode: 'UZS',
    population: '27865738',
    capital: 'Tashkent',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'uz,ru,tg'
  },
  {
    countryCode: 'VU',
    countryName: 'Vanuatu',
    currencyCode: 'VUV',
    population: '221552',
    capital: 'Port Vila',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'bi,en-VU,fr-VU'
  },
  {
    countryCode: 'VA',
    countryName: 'Vatican City',
    currencyCode: 'EUR',
    population: '921',
    capital: 'Vatican City',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'la,it,fr'
  },
  {
    countryCode: 'VE',
    countryName: 'Venezuela',
    currencyCode: 'VES',
    population: '27223228',
    capital: 'Caracas',
    continentName: 'South America',
    continent: 'SA',
    languages: 'es-VE'
  },
  {
    countryCode: 'VN',
    countryName: 'Vietnam',
    currencyCode: 'VND',
    population: '89571130',
    capital: 'Hanoi',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'vi,en,fr,zh,km'
  },
  {
    countryCode: 'WF',
    countryName: 'Wallis and Futuna',
    currencyCode: 'XPF',
    population: '16025',
    capital: 'Mata-Utu',
    continentName: 'Oceania',
    continent: 'OC',
    languages: 'wls,fud,fr-WF'
  },
  {
    countryCode: 'EH',
    countryName: 'Western Sahara',
    currencyCode: 'MAD',
    population: '273008',
    capital: 'Laâyoune / El Aaiún',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'ar,mey'
  },
  {
    countryCode: 'YE',
    countryName: 'Yemen',
    currencyCode: 'YER',
    population: '23495361',
    capital: 'Sanaa',
    continentName: 'Asia',
    continent: 'AS',
    languages: 'ar-YE'
  },
  {
    countryCode: 'ZM',
    countryName: 'Zambia',
    currencyCode: 'ZMW',
    population: '13460305',
    capital: 'Lusaka',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-ZM,bem,loz,lun,lue,ny,toi'
  },
  {
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    currencyCode: 'ZWL',
    population: '13061000',
    capital: 'Harare',
    continentName: 'Africa',
    continent: 'AF',
    languages: 'en-ZW,sn,nr,nd'
  },
  {
    countryCode: 'AX',
    countryName: 'Åland',
    currencyCode: 'EUR',
    population: '26711',
    capital: 'Mariehamn',
    continentName: 'Europe',
    continent: 'EU',
    languages: 'sv-AX'
  }
]

module.exports = countries
