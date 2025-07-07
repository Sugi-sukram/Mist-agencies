-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT,
    `email` VARCHAR(191),
    `mobile` TEXT,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isProductOwner` BOOLEAN NOT NULL DEFAULT false,
    `address` TEXT,
    `pincode` TEXT,
    `city` TEXT DEFAULT 'Coimbatore',
    `state` TEXT DEFAULT 'Tamil Nadu',
    `country` TEXT DEFAULT 'India',
    `lastLogin` TIMESTAMP(3) NOT NULL,
    `image` TEXT,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `Products` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `unit` ENUM('KG', 'ML') NOT NULL,
    `volume` INTEGER NOT NULL,
    `packSize` INTEGER NOT NULL,
    `originalPrice` INTEGER NOT NULL,
    `discountPrice` INTEGER NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `Orders` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` VARCHAR(191) NOT NULL,
    `orderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `ContactRequests` (
    `id` VARCHAR(191) NOT NULL,
    `name` TEXT NOT NULL,
    `mobile` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `packingType` TEXT NOT NULL,
    `units` TEXT NOT NULL,
    `Venue` TEXT NOT NULL,
    `address` TEXT NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` TIMESTAMP(3) NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `Feedback` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `feedback` TEXT,
    `productId` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateIndex
CREATE UNIQUE INDEX `Admin_email_key` ON `Admin`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Session_sessionToken_key` ON `Session`(`sessionToken`);

-- AddForeignKey
ALTER TABLE `OrderItem`
  ADD CONSTRAINT `OrderItem_orderId_fkey`
  FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`)
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `OrderItem`
  ADD CONSTRAINT `OrderItem_productId_fkey`
  FOREIGN KEY (`productId`) REFERENCES `Products`(`id`)
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE `Session`
  ADD CONSTRAINT `Session_userId_fkey`
  FOREIGN KEY (`userId`) REFERENCES `Admin`(`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Feedback`
  ADD CONSTRAINT `Feedback_productId_fkey`
  FOREIGN KEY (`productId`) REFERENCES `Products`(`id`)
  ON DELETE RESTRICT ON UPDATE CASCADE;
