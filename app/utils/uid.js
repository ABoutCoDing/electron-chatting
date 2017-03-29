export function uidGen() {
  const SALT = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789THISisELECTRONsemiarSAMPLEapplication!!:D';
  let result = '';
  for (let i = 0, SALT_LENGTH = SALT.length; i < 16; i++) {
    result = result.concat(SALT[Math.floor(Math.random() * SALT_LENGTH)]);
  }
  return result;
}