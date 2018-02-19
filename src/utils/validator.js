import Error from "./error";

const EmailRegex = /^[0-9a-zа-я-\\.]+@[0-9a-zа-я]{2,}\.[a-zа-я]{2,}$/i;
const UsernameRegex = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/i;
const NameRegex = /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/i;
const IPv4 = /^(\d{1,3}\.){3,3}\d{1,3}$/i;
const IPv6 = /^(::)?(((\d{1,3}\.){3}(\d{1,3}){1})?([0-9a-f]){0,4}:{0,2}){1,8}(::)?$/i;

class Validator {

  static LoginField(login) {
    switch (true) {
      case !login.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case login.length < 4:
        return Error.USERNAME_TO_SHORT;
      case login.indexOf("@") > 0 && !EmailRegex.test(login):
        return Error.EMAIL_FORMAT_INVALID;
      default:
        return null
    }
  }

  static UsernameField(username) {
    switch (true) {
      case !username.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case username.length < 4:
        return Error.USERNAME_TO_SHORT;
      case username.length > 64:
        return Error.USERNAME_TO_LONG;
      case !UsernameRegex.test(username):
        return Error.USERNAME_FORMAT_INVALID;
      default:
        return null
    }
  }

  static EmailField(email) {
    switch (true) {
      case !email.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case !EmailRegex.test(email):
        return Error.EMAIL_FORMAT_INVALID;
      default:
        return null
    }
  }

  static PasswordField(password) {
    switch (true) {
      case password.length < 8:
        return Error.PASSWORD_TO_SHORT;
      default:
        return null
    }
  }

  static NameField(name) {
    switch (true) {
      case !name.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case name.length < 4:
        return Error.NAME_TO_SHORT;
      case name.length > 64:
        return Error.NAME_TO_LONG;
      case !NameRegex.test(name):
        return Error.NAME_FORMAT_INVALID;
      default:
        return null
    }
  }

  static ReplicasField(val) {
    val = parseInt(val, 10);
    switch (true) {
      case val < 1 || val > 10:
        return Error.INVALID_FIELD_VALUE;
      default:
        return null
    }
  }

  static IPField(ip) {
    switch (true) {
      case !ip.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      case !IPv4.test(ip) && !IPv6.test(ip):
        return Error.IP_FORMAT_INVALID;
      default:
        return null
    }
  }

  static NotEmptyField(data) {
    switch (true) {
      case !data.length:
        return Error.FIELD_CANNOT_BE_BLANK;
      default:
        return null
    }
  }
}

export default Validator