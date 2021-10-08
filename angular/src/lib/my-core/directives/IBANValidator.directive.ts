import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';

// ref: https://github.com/validatorjs/validator.js/blob/master/src/lib/isIBAN.js

/**
 * List of country codes with
 * corresponding IBAN regular expression
 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */
 const ibanRegexThroughCountryCode = [
  { pais: 'AD', expresion: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/ },
  { pais: 'AE', expresion: /^(AE[0-9]{2})\d{3}\d{16}$/ },
  { pais: 'AL', expresion: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/ },
  { pais: 'AT', expresion: /^(AT[0-9]{2})\d{16}$/ },
  { pais: 'AZ', expresion: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/ },
  { pais: 'BA', expresion: /^(BA[0-9]{2})\d{16}$/ },
  { pais: 'BE', expresion: /^(BE[0-9]{2})\d{12}$/ },
  { pais: 'BG', expresion: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/ },
  { pais: 'BH', expresion: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/ },
  { pais: 'BR', expresion: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/ },
  { pais: 'BY', expresion: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/ },
  { pais: 'CH', expresion: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/ },
  { pais: 'CR', expresion: /^(CR[0-9]{2})\d{18}$/ },
  { pais: 'CY', expresion: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/ },
  { pais: 'CZ', expresion: /^(CZ[0-9]{2})\d{20}$/ },
  { pais: 'DE', expresion: /^(DE[0-9]{2})\d{18}$/ },
  { pais: 'DK', expresion: /^(DK[0-9]{2})\d{14}$/ },
  { pais: 'DO', expresion: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/ },
  { pais: 'EE', expresion: /^(EE[0-9]{2})\d{16}$/ },
  { pais: 'EG', expresion: /^(EG[0-9]{2})\d{25}$/ },
  { pais: 'ES', expresion: /^(ES[0-9]{2})\d{20}$/ },
  { pais: 'FI', expresion: /^(FI[0-9]{2})\d{14}$/ },
  { pais: 'FO', expresion: /^(FO[0-9]{2})\d{14}$/ },
  { pais: 'FR', expresion: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/ },
  { pais: 'GB', expresion: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/ },
  { pais: 'GE', expresion: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/ },
  { pais: 'GI', expresion: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/ },
  { pais: 'GL', expresion: /^(GL[0-9]{2})\d{14}$/ },
  { pais: 'GR', expresion: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/ },
  { pais: 'GT', expresion: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/ },
  { pais: 'HR', expresion: /^(HR[0-9]{2})\d{17}$/ },
  { pais: 'HU', expresion: /^(HU[0-9]{2})\d{24}$/ },
  { pais: 'IE', expresion: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/ },
  { pais: 'IL', expresion: /^(IL[0-9]{2})\d{19}$/ },
  { pais: 'IQ', expresion: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/ },
  { pais: 'IR', expresion: /^(IR[0-9]{2})0\d{2}0\d{18}$/ },
  { pais: 'IS', expresion: /^(IS[0-9]{2})\d{22}$/ },
  { pais: 'IT', expresion: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/ },
  { pais: 'JO', expresion: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/ },
  { pais: 'KW', expresion: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/ },
  { pais: 'KZ', expresion: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/ },
  { pais: 'LB', expresion: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/ },
  { pais: 'LC', expresion: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/ },
  { pais: 'LI', expresion: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/ },
  { pais: 'LT', expresion: /^(LT[0-9]{2})\d{16}$/ },
  { pais: 'LU', expresion: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/ },
  { pais: 'LV', expresion: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/ },
  { pais: 'MC', expresion: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/ },
  { pais: 'MD', expresion: /^(MD[0-9]{2})[A-Z0-9]{20}$/ },
  { pais: 'ME', expresion: /^(ME[0-9]{2})\d{18}$/ },
  { pais: 'MK', expresion: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/ },
  { pais: 'MR', expresion: /^(MR[0-9]{2})\d{23}$/ },
  { pais: 'MT', expresion: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/ },
  { pais: 'MU', expresion: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/ },
  { pais: 'MZ', expresion: /^(MZ[0-9]{2})\d{21}$/ },
  { pais: 'NL', expresion: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/ },
  { pais: 'NO', expresion: /^(NO[0-9]{2})\d{11}$/ },
  { pais: 'PK', expresion: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/ },
  { pais: 'PL', expresion: /^(PL[0-9]{2})\d{24}$/ },
  { pais: 'PS', expresion: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/ },
  { pais: 'PT', expresion: /^(PT[0-9]{2})\d{21}$/ },
  { pais: 'QA', expresion: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/ },
  { pais: 'RO', expresion: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/ },
  { pais: 'RS', expresion: /^(RS[0-9]{2})\d{18}$/ },
  { pais: 'SA', expresion: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/ },
  { pais: 'SC', expresion: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/ },
  { pais: 'SE', expresion: /^(SE[0-9]{2})\d{20}$/ },
  { pais: 'SI', expresion: /^(SI[0-9]{2})\d{15}$/ },
  { pais: 'SK', expresion: /^(SK[0-9]{2})\d{20}$/ },
  { pais: 'SM', expresion: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/ },
  { pais: 'SV', expresion: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/ },
  { pais: 'TL', expresion: /^(TL[0-9]{2})\d{19}$/ },
  { pais: 'TN', expresion: /^(TN[0-9]{2})\d{20}$/ },
  { pais: 'TR', expresion: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/ },
  { pais: 'UA', expresion: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/ },
  { pais: 'VA', expresion: /^(VA[0-9]{2})\d{18}$/ },
  { pais: 'VG', expresion: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/ },
  { pais: 'XK', expresion: /^(XK[0-9]{2})\d{16}$/ },
 ];

/**
 * Check whether string has correct universal IBAN format
 * The IBAN consists of up to 34 alphanumeric characters, as follows:
 * Country Code using ISO 3166-1 alpha-2, two letters
 * check digits, two digits and
 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
 *
 * @param {string} str - string under validation
 * @return {boolean}
 */
function hasValidIbanFormat(str: string) {
  // Strip white spaces and hyphens
  const strippedStr = str.replace(/[\s\-]+/gi, '').toUpperCase();
  const isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
  const validator = ibanRegexThroughCountryCode.find(item => item.pais === isoCountryCode);
  return validator && validator.expresion.test(strippedStr);
}

/**
   * Check whether string has valid IBAN Checksum
   * by performing basic mod-97 operation and
   * the remainder should equal 1
   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
   * -- Interpret the string as a decimal integer and
   * -- compute the remainder on division by 97 (mod 97)
   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
   *
   * @param {string} str
   * @return {boolean}
   */
function hasValidIbanChecksum(str: string): boolean {
  const strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic
  const rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
  const alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, char => (char.charCodeAt(0) - 55).toString());
  const remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g)
  if(remainder)  {
    return remainder.reduce((acc, value) => Number(acc + value) % 97, 0) == 1;
  } else
    return false;
}

export default function isIBAN(str: string) {
  return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
}

export function IBANValidation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) { return null; }
    return hasValidIbanFormat(control.value) && hasValidIbanChecksum(control.value) ? null : { IBAN: 'No es un IBAN valido' };
  };
}
@Directive({
  selector: '[iban][formControlName],[iban][formControl],[iban][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IBANValidator, multi: true }]
})
export class IBANValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return IBANValidation()(control);
  }
}
