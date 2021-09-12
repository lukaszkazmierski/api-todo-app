class PropertyValidator {
  static isUndefined = (prop: any): boolean => prop === undefined;

  static isNull = (prop: any): boolean => prop === null;

  static isNaN = (prop: any): boolean => prop === NaN;

  static isNotUndefined = (prop: any): boolean => !this.isUndefined(prop);

  static isNotNull = (prop: any): boolean => !this.isNull(prop);

  static isNotNaN = (prop: any): boolean => !this.isNaN(prop);

  static isType = <T>(prop: any): prop is T => !!prop.type;

  static isValid(prop: any): boolean {
    if (this.isUndefined(prop) || this.isNull(prop) || this.isNaN(prop)) {
      return false;
    }

    switch (true) {
      case this.isType<string>(prop):
        return this.isStringValid(prop);
      case this.isType<number>(prop):
        return this.isNumberValid(prop);
      case this.isType<object>(prop):
        return this.isObjectValid(prop);
      default:
        return true;
    }
  }

  static isStringValid(prop: string): boolean {
    if (prop === "" || prop.length <= 0) {
      return false;
    }
    return true;
  }

  static isNumberValid(prop: number): boolean {
    if (
      isNaN(prop) ||
      !isFinite(prop) ||
      prop > Number.MAX_VALUE ||
      prop < Number.MIN_VALUE ||
      !Number.isSafeInteger(prop)
    ) {
      return false;
    }
    return true;
  }

  static isObjectValid(prop: object): boolean {
    if (Object.keys(prop).length <= 0) {
      return false;
    }
    return true;
  }
}

module.exports = PropertyValidator;
