-- CreateTable
CREATE TABLE `BookSugesstion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'Book title',
    `author` VARCHAR(191) NOT NULL DEFAULT 'Book author',
    `gener` VARCHAR(191) NOT NULL DEFAULT 'Book gener',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
