-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: Db_module_4
-- ------------------------------------------------------
-- Server version	5.7.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buildings`
--

DROP TABLE IF EXISTS `buildings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `buildings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_id` int(11) NOT NULL,
  `street` varchar(65) NOT NULL,
  `house` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Building_cities` (`city_id`),
  CONSTRAINT `FK_Building_cities` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=311 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buildings`
--

LOCK TABLES `buildings` WRITE;
/*!40000 ALTER TABLE `buildings` DISABLE KEYS */;
INSERT INTO `buildings` VALUES (37,1,'streett11','houseee'),(47,1,'streett11','houseee'),(48,1,'streett11','houseee'),(49,1,'streett11','houseee'),(50,1,'streett11','houseee'),(51,1,'streett11','houseee'),(52,1,'streett11','houseee'),(53,1,'streett11','houseee'),(54,1,'streett11','houseee'),(55,1,'streett11','houseee'),(56,1,'streett11','houseee'),(57,1,'streett11','houseee'),(58,1,'streett11','houseee'),(59,1,'streett11','houseee'),(60,1,'streett11','houseee'),(61,1,'streett11','houseee'),(62,1,'streett11','houseee'),(63,1,'streett11','houseee'),(64,1,'streett11','houseee'),(65,1,'streett11','houseee'),(66,1,'streett11','houseee'),(67,1,'streett11','houseee'),(68,1,'streett11','houseee'),(69,1,'streett11','houseee'),(70,1,'streett11','houseee'),(71,1,'streett11','houseee'),(72,1,'streett11','houseee'),(73,1,'streett11','houseee'),(74,1,'streett11','houseee'),(75,1,'streett11','houseee'),(76,1,'streett11','houseee'),(77,1,'streett11','houseee'),(78,1,'streett11','houseee'),(79,1,'streett11','houseee'),(80,1,'streett11','houseee'),(81,1,'streett11','houseee'),(82,1,'streett11','houseee'),(83,1,'streett11','houseee'),(84,1,'streett11','houseee'),(85,1,'streett11','houseee'),(86,1,'streett11','houseee'),(87,1,'streett11','houseee'),(88,1,'streett11','houseee'),(89,1,'streett11','houseee'),(90,1,'streett11','houseee'),(91,1,'streett11','houseee'),(92,1,'streett11','houseee'),(93,1,'streett11','houseee'),(94,1,'streett11','houseee'),(95,1,'streett11','houseee'),(96,1,'streett11','houseee'),(97,1,'streett11','houseee'),(98,1,'streett11','houseee'),(99,1,'streett11','houseee'),(100,1,'streett11','houseee'),(101,1,'streett11','houseee'),(102,1,'streett11','houseee'),(103,1,'streett11','houseee'),(104,1,'streett11','houseee'),(105,1,'streett11','houseee'),(106,1,'streett11','houseee'),(107,1,'streett11','houseee'),(108,1,'streett11','houseee'),(109,1,'streett11','houseee'),(110,1,'streett11','houseee'),(111,1,'streett11','houseee'),(112,1,'streett11','houseee'),(113,1,'streett11','houseee'),(114,1,'streett11','houseee'),(115,1,'streett11','houseee'),(116,1,'streett11','houseee'),(117,1,'streett11','houseee'),(118,1,'streett11','houseee'),(119,1,'streett11','houseee'),(120,1,'streett11','houseee'),(121,1,'streett11','houseee'),(122,1,'streett11','houseee'),(123,1,'streett11','houseee'),(124,1,'streett11','houseee'),(125,1,'streett11','houseee'),(126,1,'streett11','houseee'),(127,1,'streett11','houseee'),(128,1,'streett11','houseee'),(129,1,'streett11','houseee'),(130,1,'streett11','houseee'),(131,1,'streett11','houseee'),(132,1,'streett11','houseee'),(133,1,'streett11','houseee'),(134,1,'streett11','houseee'),(135,1,'streett11','houseee'),(136,1,'streett11','houseee'),(137,1,'streett11','houseee'),(138,1,'streett11','houseee'),(139,1,'streett11','houseee'),(140,1,'streett11','houseee'),(141,1,'streett11','houseee'),(142,1,'streett11','houseee'),(143,1,'streett11','houseee'),(144,1,'streett11','houseee'),(145,1,'streett11','houseee'),(146,1,'streett11','houseee'),(147,1,'streett11','houseee'),(148,1,'streett11','houseee'),(149,1,'streett11','houseee'),(150,1,'streett11','houseee'),(151,1,'streett11','houseee'),(152,1,'streett11','houseee'),(153,1,'streett11','houseee'),(154,1,'streett11','houseee'),(155,1,'streett11','houseee'),(156,1,'streett11','houseee'),(157,3,'streett11','houseee'),(222,6,'fhhhhf','ffhfhfhh'),(223,3,'ggggggggg','ggggggg'),(224,1,'2','3'),(225,2,'gf','h'),(226,5,'k','k'),(227,6,'hm','mmmmm'),(229,3,'111111','111116'),(230,6,'r66','jhjhjhjhjh'),(231,1,'street12','house12'),(232,1,'r334','6667'),(233,3,'33','3333'),(235,3,'3333','333333'),(236,6,'666','66666'),(237,2,'22224','2222222'),(239,3,'HGHGH','4646'),(240,4,'ggg','hh'),(241,3,'fg','g'),(242,1,'1','1'),(243,2,'3','377'),(244,3,'323','2323'),(245,3,'33','33'),(246,6,'6','6'),(247,4,'44','44'),(248,3,'3','4444'),(249,7,'77','777'),(250,5,'55','55'),(251,3,'333','333'),(252,5,'4g','gg'),(253,5,'555','555'),(254,8,'88','888'),(255,5,'555','555555'),(256,4,'44444499','44444'),(257,8,'8888','888'),(258,9,'999','999'),(259,6,'259','6666'),(260,6,'666','6666'),(266,3,'jjj','jjjj'),(267,4,'44','44'),(268,3,'55','gfdgghhhh'),(269,2,'dfgdfgfd','66666'),(270,3,'55','3'),(271,3,'dfgdfgfd','3'),(272,3,'6','99999'),(273,3,'ggg','333333'),(274,3,'dfgdfgfd','66666'),(275,2,'ggg','gfdgghhhh'),(276,3,'dfgdfgfd','3'),(277,1,'jujuj','3'),(278,1,'55','55'),(279,1,'55','gfdgghhhh'),(280,1,'dfgdfgfd','gfdgghhhh'),(281,1,'dfgdfgfd','gfdgghhhh'),(289,3,'<script>alert(\"ag\")</script>','<script>'),(290,3,'dfgdfgfd','gfdgghhhh'),(291,3,'dfgdfgfd','gfdgghhhh'),(292,3,'55','66666'),(293,3,'55','55'),(294,3,'55','99999'),(295,3,'dfgdfgfd','3'),(296,3,'dfgdfgfd','55'),(297,3,'dfgdfgfd','38'),(300,3,'55','gfdgghhhh'),(301,4,'ggwp','123'),(302,4,'ggwp','123'),(306,4,'g','YY3'),(307,4,'7778','YY3'),(308,4,'g','YY3'),(309,4,'g','YY388'),(310,4,'g','Y88');
/*!40000 ALTER TABLE `buildings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Countries_cities` (`country_id`),
  KEY `I_city_name` (`name`),
  CONSTRAINT `FK_Countries_cities` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Город1',1),(2,'Город2',3),(3,'Город3',3),(4,'Город4',5),(5,'Город7',6),(6,'Город5',1),(7,'Город6',1),(8,'Город8',10),(9,'Город9',8),(10,'Город10',10),(11,'Город11',4);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(70) NOT NULL,
  `number_of_employees` int(11) NOT NULL,
  `foundation_year` year(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `I_comapny_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (9,'ририok',123448,2020),(19,'fffffffffff8',7,2003),(20,'r',5,2000),(21,'fggf',55,2000),(22,'ddgg',45,1980),(23,'uuu',22,2000),(24,'7',7,2000),(25,'fffffffffff',4,2000),(26,'fffffffffff',4,2000),(27,'аркаggg',1203,2018),(28,'аркаggg',1203,2018),(29,'ар0',2000,2006),(30,'аркаggg',2000,2006),(31,'fffffffffff99',4,2000),(32,'0fffffffffff99',4,2000),(33,'fffffffffff999',4,2000),(34,'00fffffffffff99',4,2000),(35,'0fffffffffff999',7,2001),(36,'ар-',2000,2006),(37,'fffffffffff',5,2000),(38,'аркаggg',2000,2006),(39,'аркаggg0',2000,2006),(40,'аркаgggh',2000,2006),(41,'ар3',2000,2006),(42,'аркаggghk',2000,2006),(43,'ар9',2000,2006),(44,'fffffffffff',33333333,2000),(45,'fffffffffff',33333333,2000),(46,'аркаggg',444,2000),(47,'аркаggg',1,2002),(48,'ар9',33333333,2000),(49,'fffffffffff',1,2002),(50,'fffffffffff',444,2000),(53,'ар9jjj',1,2000),(54,'fffffffffff',33333333,2000),(55,'fffffffffff',11111,2002),(56,'<script>alert(\"opa\")</script>',33333333,2000),(57,'fffffffffff',33333333,2000),(58,'fffffffffff',33333333,2000),(59,'арт',444,2000),(60,'ар9',33333333,2000),(61,'ар9',444,2000),(62,'fffffffffff',33333333,2000),(63,'fffffffffff',33333333,2000),(64,'артемий1',33333333,1998),(65,'артемий1',33333333,2000),(67,'apiChange',20000,2012);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies_workers`
--

DROP TABLE IF EXISTS `companies_workers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies_workers` (
  `worker_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  PRIMARY KEY (`worker_id`,`company_id`),
  KEY `Companies_workers_FK` (`company_id`),
  CONSTRAINT `Companies_workers_FK` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Workers_companies_FK` FOREIGN KEY (`worker_id`) REFERENCES `workers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies_workers`
--

LOCK TABLES `companies_workers` WRITE;
/*!40000 ALTER TABLE `companies_workers` DISABLE KEYS */;
INSERT INTO `companies_workers` VALUES (20,43),(20,44),(20,45),(21,45),(22,46),(22,47),(23,47);
/*!40000 ALTER TABLE `companies_workers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `prestige` varchar(14) DEFAULT 'Не указан',
  PRIMARY KEY (`id`),
  KEY `I_contry_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Москва','Высокий'),(2,'Лондон','Супер'),(3,'Оттава','Высокий'),(4,'Дели','Высокий'),(5,'Рим','Высокий'),(6,'Ростов-на-дону','Высокий'),(7,'Нью-орк','Супер'),(8,'Варшава','Высокий'),(9,'Баку','Высокий'),(10,'Грозный','Высокий'),(11,'Роро','Нормальный');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`igor`@`localhost`*/ /*!50003 TRIGGER validate_prestige BEFORE INSERT ON `countries` FOR EACH ROW 
    BEGIN
        IF NEW.prestige NOT IN ('Супер','Высокий','Нормальный')
            THEN SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Введены неверные данные в поле prestige, доступный пулл данных (Супер, Высокий, Нормальный) )';
        END IF; 
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `offices`
--

DROP TABLE IF EXISTS `offices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) NOT NULL,
  `building_id` int(11) NOT NULL,
  `rental_price` decimal(12,3) NOT NULL,
  `construction_year` year(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Offices_companies` (`company_id`),
  KEY `FK_Offices_building` (`building_id`),
  CONSTRAINT `FK_Offices_building` FOREIGN KEY (`building_id`) REFERENCES `buildings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_Offices_companies` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offices`
--

LOCK TABLES `offices` WRITE;
/*!40000 ALTER TABLE `offices` DISABLE KEYS */;
INSERT INTO `offices` VALUES (4,43,55,3434.000,1999),(6,22,66,204000.000,2006),(7,22,55,4444.000,1999),(8,22,55,111111.000,1999),(9,22,55,111111.000,1999);
/*!40000 ALTER TABLE `offices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `positions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'работник'),(2,'директор'),(3,'начальник'),(4,'ген.директор'),(5,'мастер');
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workers`
--

DROP TABLE IF EXISTS `workers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `workers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `surname` varchar(35) NOT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workers`
--

LOCK TABLES `workers` WRITE;
/*!40000 ALTER TABLE `workers` DISABLE KEYS */;
INSERT INTO `workers` VALUES (20,'igor12','bb','2022-10-07','imikhailov@lachestry.com','$2b$10$TgB4s1QmPqXgzerHerh8nu4L8I2aTDJA2EaAi8thScULGw0lVyr.y'),(21,'ogo123','аласян','2022-09-03','imikhailov@lhestry.com','$2b$10$QydV0vV1dqcXIsWWDDYvpuRH.hjDwhuRpeYi7ZrJ3LHo1N.W4OYMe'),(22,'ggg1234','аласян1','2022-09-09','imikhailov@lay.com','$2b$10$dGsEf5vAUBA2iHbIYQYQy.JMiCHhMdX.3LjCnYspBfHnrW18KYs9O'),(23,'igor12345','аласян222','2022-09-09','imikhailov@lchestry1.com','$2b$10$06EmenM5A4AOxoXIqwAUUeE97hQv8PikHRgxzUQFVqgYg.AEkbklW'),(24,'gaga1','аласян1','2022-09-17','edu@lachestry.com','$2b$10$/fAUi1vI86OxABY.Azn7v.1AaaZN9JefQDv3lf2rOzhqM8BDXATku'),(25,'артемий16','bbbu266','2022-09-03','edu3@lachestry.com','$2b$10$RkbhFuxIbJTF9BXrwCsVQOf8VfqDOcJeDU/FoTjqQRlz0NQjxV6QO'),(27,'артемий18','bbbu','2022-09-03','edu@lactry.com','$2b$10$xZVDX3pVIuCD2RfCtYkFHuFo34mSdPl/S35XfW7LlxYLfbRCa8meK'),(28,'fffffffffff344','аласян222','2022-08-31','imikhaiov@lchestry.com','$2b$10$FYnQRKJVF0IcM2UqdwbDnuMm0iOe3CQw8boemx7bH3GjzByip3mP2'),(29,'артемий1','аласян','2022-09-03','imikhailov@lastr.com','$2b$10$xmk67Fgit.WIxJzIapICZuqfd0y0lJxbuQdOznTE.eP2DSsDwMo.e'),(30,'артемий14','аласян','2022-09-16','imikhailov@estry.com','$2b$10$Ifh8IAPJYOIE3yBVZegX/.g/M5gDGWzvDm.l.uShlc7xcAvLxz9ie'),(31,'аркаggg123','bbbub','2022-09-12','imikhailov@str.com','$2b$10$QJxdr5YbgWiydjKeY0rYD.M6oxQMMsjV.zPW9s3rlsidNWlc3MVQC'),(32,'артемий18','bbbu28','2022-09-09','ed@lachestry.com','$2b$10$B2s9cmNpZ65LJ6k6nZQMZeT1ge8zdOuAShvhKi5TRG2LVF8dJ7LQK'),(33,'fffffffffff77','аласян1','2022-09-09','imikhailov@lachestry77.com','$2b$10$ge76g/vEr50PcliGx1TaPOdnCmtUBGJNTwkK8rrjkB6XannDMWyzC'),(34,'артемий11','аласян','2022-09-15','imikhailov@lachestr11.com','$2b$10$Y.3toZjVyJQ8mD1C1tqYE.J2P6Qh4toarnx0q0FSUJu5EQJuJMuOe'),(35,'fffffffffff55','аласян1','2022-09-08','imikhailov@lache0str.com','$2b$10$7Tx9.ay8hWklJf6lcdJMnO9AQwHU7793EDYIVeCVsu8iSav0iIvnC'),(36,'артемий17','а0ла','2022-09-15','imikhailov@lache55str.com','$2b$10$P6hIG4.ohbhTvcO97RlbLOfTwCqt.HcMqJrFY57I1Hv0KYCBLd/qC'),(37,'артемий12','<script>alert(\"a\")</script>','2022-09-10','imikhailov@lachestr.com','$2b$10$6dx8ECc7RdZmpiUOyi4fXuln.QjElE/rGei2Z5lP5UCd2Gqjb4Wq2'),(38,'fffffffffff22','аласян','2022-10-07','imikhailov@chestry.com','$2b$10$3ckwOhQpw54zUHydj.DZcOA3U4XzEhiEOjF/Bv9kq.zuMRTormo4W'),(39,'fffffffffff12','аласян','2022-10-08','imikhailov@lstry.com','$2b$10$zwHgUp81kM5omWEDGfe08eL59usSqo.NBCr10beCreQzW2HCuyO3y');
/*!40000 ALTER TABLE `workers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-15 20:24:57
