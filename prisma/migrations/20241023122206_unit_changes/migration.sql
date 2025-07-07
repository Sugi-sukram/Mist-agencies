ALTER TABLE `Products`
MODIFY COLUMN `unit` ENUM(
  'KG',
  'ML',
  'G',
  'LITRE',
  'PC',
  'DOZEN',
  'PACKET',
  'METER',
  'CENTIMETER',
  'INCH',
  'FEET'
) NOT NULL;
