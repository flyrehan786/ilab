-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: lab_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_tests_uuid` varchar(255) DEFAULT NULL,
  `total_amount` varchar(45) DEFAULT NULL,
  `total_discount` varchar(45) DEFAULT NULL,
  `total_paid_amount` varchar(45) DEFAULT NULL,
  `balance_amount` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'1697201844254','10000','2000','10000','8000','2023-10-13 17:57:24','2023-10-13 17:57:24'),(2,'1697201932615','10000','2000','10000','8000','2023-10-13 17:58:52','2023-10-13 17:58:52'),(3,'1697201983886','10000','2000','10000','8000','2023-10-13 17:59:43','2023-10-13 17:59:43'),(4,'1697202001611','10000','2000','10000','8000','2023-10-13 18:00:01','2023-10-13 18:00:01'),(5,'1697202028888','10000','2000','10000','8000','2023-10-13 18:00:28','2023-10-13 18:00:28'),(6,'1697202056286','10000','2000','10000','8000','2023-10-13 18:00:56','2023-10-13 18:00:56'),(7,'1697202074758','10000','2000','10000','8000','2023-10-13 18:01:14','2023-10-13 18:01:14'),(8,'1697202107820','10000','2000','10000','8000','2023-10-13 18:01:47','2023-10-13 18:01:47'),(9,'1697202163908','10000','2000','10000','8000','2023-10-13 18:02:43','2023-10-13 18:02:43'),(10,'1697202405476','10000','2000','10000','8000','2023-10-13 18:06:45','2023-10-13 18:06:45'),(11,'1697202410237','10000','2000','10000','8000','2023-10-13 18:06:50','2023-10-13 18:06:50'),(12,'1697202748868','10000','2000','10000','8000','2023-10-13 18:12:28','2023-10-13 18:12:28'),(13,'1697202869824','10000','2000','10000','8000','2023-10-13 18:14:29','2023-10-13 18:14:29'),(14,'1697202909773','10000','2000','10000','8000','2023-10-13 18:15:09','2023-10-13 18:15:09'),(15,'1697202958454','10000','2000','10000','8000','2023-10-13 18:15:58','2023-10-13 18:15:58'),(16,'1697203090306','10000','2000','10000','8000','2023-10-13 18:18:10','2023-10-13 18:18:10'),(17,'1697203133493','10000','2000','10000','8000','2023-10-13 18:18:53','2023-10-13 18:18:53'),(18,'1697203151727','10000','2000','10000','8000','2023-10-13 18:19:11','2023-10-13 18:19:11'),(19,'1697203165054','10000','2000','10000','8000','2023-10-13 18:19:25','2023-10-13 18:19:25'),(20,'1697203165457','10000','2000','10000','8000','2023-10-13 18:19:25','2023-10-13 18:19:25'),(21,'1697203166663','10000','2000','10000','8000','2023-10-13 18:19:26','2023-10-13 18:19:26'),(22,'1697203167289','10000','2000','10000','8000','2023-10-13 18:19:27','2023-10-13 18:19:27'),(23,'1697203167951','10000','2000','10000','8000','2023-10-13 18:19:27','2023-10-13 18:19:27'),(24,'1697203168520','10000','2000','10000','8000','2023-10-13 18:19:28','2023-10-13 18:19:28'),(25,'1697203169101','10000','2000','10000','8000','2023-10-13 18:19:29','2023-10-13 18:19:29'),(26,'1697203169508','10000','2000','10000','8000','2023-10-13 18:19:29','2023-10-13 18:19:29'),(27,'1697203170007','10000','2000','10000','8000','2023-10-13 18:19:30','2023-10-13 18:19:30'),(28,'1697203170417','10000','2000','10000','8000','2023-10-13 18:19:30','2023-10-13 18:19:30'),(29,'1697203170904','10000','2000','10000','8000','2023-10-13 18:19:30','2023-10-13 18:19:30'),(30,'1697203171548','10000','2000','10000','8000','2023-10-13 18:19:31','2023-10-13 18:19:31'),(31,'1697203172151','10000','2000','10000','8000','2023-10-13 18:19:32','2023-10-13 18:19:32'),(32,'1697203172461','10000','2000','10000','8000','2023-10-13 18:19:32','2023-10-13 18:19:32'),(33,'1697203174038','10000','2000','10000','8000','2023-10-13 18:19:34','2023-10-13 18:19:34'),(34,'1697203174430','10000','2000','10000','8000','2023-10-13 18:19:34','2023-10-13 18:19:34'),(35,'1697203174805','10000','2000','10000','8000','2023-10-13 18:19:34','2023-10-13 18:19:34'),(36,'1697203175157','10000','2000','10000','8000','2023-10-13 18:19:35','2023-10-13 18:19:35'),(37,'1697203176719','10000','2000','10000','8000','2023-10-13 18:19:36','2023-10-13 18:19:36'),(38,'1697203177430','10000','2000','10000','8000','2023-10-13 18:19:37','2023-10-13 18:19:37'),(39,'1697203177835','10000','2000','10000','8000','2023-10-13 18:19:37','2023-10-13 18:19:37'),(40,'1697203178292','10000','2000','10000','8000','2023-10-13 18:19:38','2023-10-13 18:19:38'),(41,'1697203178655','10000','2000','10000','8000','2023-10-13 18:19:38','2023-10-13 18:19:38'),(42,'1697203179044','10000','2000','10000','8000','2023-10-13 18:19:39','2023-10-13 18:19:39'),(43,'1697203180732','10000','2000','10000','8000','2023-10-13 18:19:40','2023-10-13 18:19:40'),(44,'1697203181011','10000','2000','10000','8000','2023-10-13 18:19:41','2023-10-13 18:19:41'),(45,'1697203182941','10000','2000','10000','8000','2023-10-13 18:19:42','2023-10-13 18:19:42'),(46,'1697203183370','10000','2000','10000','8000','2023-10-13 18:19:43','2023-10-13 18:19:43'),(47,'1697203183836','10000','2000','10000','8000','2023-10-13 18:19:43','2023-10-13 18:19:43'),(48,'1697203184302','10000','2000','10000','8000','2023-10-13 18:19:44','2023-10-13 18:19:44'),(49,'1697203184727','10000','2000','10000','8000','2023-10-13 18:19:44','2023-10-13 18:19:44'),(50,'1697203185024','10000','2000','10000','8000','2023-10-13 18:19:45','2023-10-13 18:19:45'),(51,'1697203185751','10000','2000','10000','8000','2023-10-13 18:19:45','2023-10-13 18:19:45'),(52,'1697203235820','10000','2000','10000','8000','2023-10-13 18:20:35','2023-10-13 18:20:35'),(53,'1697203352571','10000','2000','10000','8000','2023-10-13 18:22:32','2023-10-13 18:22:32'),(54,'1697203394074','10000','2000','10000','8000','2023-10-13 18:23:14','2023-10-13 18:23:14'),(55,'1697203396298','10000','2000','10000','8000','2023-10-13 18:23:16','2023-10-13 18:23:16'),(56,'1697203396672','10000','2000','10000','8000','2023-10-13 18:23:16','2023-10-13 18:23:16'),(57,'1697203397721','10000','2000','10000','8000','2023-10-13 18:23:17','2023-10-13 18:23:17'),(58,'1697203398122','10000','2000','10000','8000','2023-10-13 18:23:18','2023-10-13 18:23:18'),(59,'1697203400018','10000','2000','10000','8000','2023-10-13 18:23:20','2023-10-13 18:23:20'),(60,'1697203400410','10000','2000','10000','8000','2023-10-13 18:23:20','2023-10-13 18:23:20'),(61,'1697203400875','10000','2000','10000','8000','2023-10-13 18:23:20','2023-10-13 18:23:20'),(62,'1697203401218','10000','2000','10000','8000','2023-10-13 18:23:21','2023-10-13 18:23:21'),(63,'1697203433151-1697203433151-1697203433151','10000','2000','10000','8000','2023-10-13 18:23:53','2023-10-13 18:23:53'),(64,'1697203445497-1697203445497-1697203445497','10000','2000','10000','8000','2023-10-13 18:24:05','2023-10-13 18:24:05'),(65,'1697203600155-1697203600155-1697203600155-1697203600155','10000','2000','10000','8000','2023-10-13 18:26:40','2023-10-13 18:26:40'),(66,'1697203627884-1697203627884-1697203627884-1697203627884','10000','2000','10000','8000','2023-10-13 18:27:07','2023-10-13 18:27:07'),(67,'1697203634366-1697203634366-1697203634366-1697203634366','10000','2000','10000','8000','2023-10-13 18:27:14','2023-10-13 18:27:14'),(68,'1697203635151-1697203635151-1697203635151-1697203635151','10000','2000','10000','8000','2023-10-13 18:27:15','2023-10-13 18:27:15'),(69,'1697203635510-1697203635510-1697203635510-1697203635510','10000','2000','10000','8000','2023-10-13 18:27:15','2023-10-13 18:27:15'),(70,'1697203636978-1697203636978-1697203636978-1697203636978','10000','2000','10000','8000','2023-10-13 18:27:16','2023-10-13 18:27:16'),(71,'1697203637466-1697203637466-1697203637466-1697203637466','10000','2000','10000','8000','2023-10-13 18:27:17','2023-10-13 18:27:17'),(72,'1697203637943-1697203637943-1697203637943-1697203637943','10000','2000','10000','8000','2023-10-13 18:27:17','2023-10-13 18:27:17'),(73,'1697203638391-1697203638391-1697203638391-1697203638391','10000','2000','10000','8000','2023-10-13 18:27:18','2023-10-13 18:27:18'),(74,'1697203638840-1697203638840-1697203638840-1697203638840','10000','2000','10000','8000','2023-10-13 18:27:18','2023-10-13 18:27:18'),(75,'1697203639126-1697203639126-1697203639126-1697203639126','10000','2000','10000','8000','2023-10-13 18:27:19','2023-10-13 18:27:19'),(76,'1697203639439-1697203639439-1697203639439-1697203639439','10000','2000','10000','8000','2023-10-13 18:27:19','2023-10-13 18:27:19'),(77,'1697203640100-1697203640100-1697203640100-1697203640100','10000','2000','10000','8000','2023-10-13 18:27:20','2023-10-13 18:27:20'),(78,'1697203640377-1697203640377-1697203640377-1697203640377','10000','2000','10000','8000','2023-10-13 18:27:20','2023-10-13 18:27:20'),(79,'1697203640704-1697203640704-1697203640704-1697203640704','10000','2000','10000','8000','2023-10-13 18:27:20','2023-10-13 18:27:20'),(80,'1697203641031-1697203641031-1697203641031-1697203641031','10000','2000','10000','8000','2023-10-13 18:27:21','2023-10-13 18:27:21'),(81,'1697203641312-1697203641312-1697203641312-1697203641312','10000','2000','10000','8000','2023-10-13 18:27:21','2023-10-13 18:27:21'),(82,'1697203641667-1697203641667-1697203641667-1697203641667','10000','2000','10000','8000','2023-10-13 18:27:21','2023-10-13 18:27:21'),(83,'1697203642306-1697203642306-1697203642306-1697203642306','10000','2000','10000','8000','2023-10-13 18:27:22','2023-10-13 18:27:22'),(84,'1697203642643-1697203642643-1697203642643-1697203642643','10000','2000','10000','8000','2023-10-13 18:27:22','2023-10-13 18:27:22'),(85,'1697203643109-1697203643109-1697203643109-1697203643109','10000','2000','10000','8000','2023-10-13 18:27:23','2023-10-13 18:27:23'),(86,'1697203643405-1697203643405-1697203643405-1697203643405','10000','2000','10000','8000','2023-10-13 18:27:23','2023-10-13 18:27:23'),(87,'1697203644042-1697203644042-1697203644042-1697203644042','10000','2000','10000','8000','2023-10-13 18:27:24','2023-10-13 18:27:24'),(88,'1697203644342-1697203644342-1697203644342-1697203644342','10000','2000','10000','8000','2023-10-13 18:27:24','2023-10-13 18:27:24'),(89,'1697203644698-1697203644698-1697203644698-1697203644698','10000','2000','10000','8000','2023-10-13 18:27:24','2023-10-13 18:27:24'),(90,'1697203645912-1697203645912-1697203645912-1697203645912','10000','2000','10000','8000','2023-10-13 18:27:25','2023-10-13 18:27:25'),(91,'1697203646332-1697203646332-1697203646332-1697203646332','10000','2000','10000','8000','2023-10-13 18:27:26','2023-10-13 18:27:26'),(92,'1697203646655-1697203646655-1697203646655-1697203646655','10000','2000','10000','8000','2023-10-13 18:27:26','2023-10-13 18:27:26'),(93,'1697203647057-1697203647057-1697203647057-1697203647057','10000','2000','10000','8000','2023-10-13 18:27:27','2023-10-13 18:27:27'),(94,'1697203647401-1697203647401-1697203647401-1697203647401','10000','2000','10000','8000','2023-10-13 18:27:27','2023-10-13 18:27:27'),(95,'1697203648332-1697203648332-1697203648332-1697203648332','10000','2000','10000','8000','2023-10-13 18:27:28','2023-10-13 18:27:28'),(96,'1697203648647-1697203648647-1697203648647-1697203648647','10000','2000','10000','8000','2023-10-13 18:27:28','2023-10-13 18:27:28'),(97,'1697203649036-1697203649036-1697203649036-1697203649036','10000','2000','10000','8000','2023-10-13 18:27:29','2023-10-13 18:27:29'),(98,'1697203649400-1697203649400-1697203649400-1697203649400','10000','2000','10000','8000','2023-10-13 18:27:29','2023-10-13 18:27:29'),(99,'1697203649736-1697203649736-1697203649736-1697203649736','10000','2000','10000','8000','2023-10-13 18:27:29','2023-10-13 18:27:29'),(100,'1697203650337-1697203650337-1697203650337-1697203650337','10000','2000','10000','8000','2023-10-13 18:27:30','2023-10-13 18:27:30'),(101,'1697203650938-1697203650938-1697203650938-1697203650938','10000','2000','10000','8000','2023-10-13 18:27:30','2023-10-13 18:27:30'),(102,'1697203651807-1697203651807-1697203651807-1697203651807','10000','2000','10000','8000','2023-10-13 18:27:31','2023-10-13 18:27:31'),(103,'1697203652156-1697203652156-1697203652156-1697203652156','10000','2000','10000','8000','2023-10-13 18:27:32','2023-10-13 18:27:32'),(104,'1697203652736-1697203652736-1697203652736-1697203652736','10000','2000','10000','8000','2023-10-13 18:27:32','2023-10-13 18:27:32'),(105,'1697203653035-1697203653035-1697203653035-1697203653035','10000','2000','10000','8000','2023-10-13 18:27:33','2023-10-13 18:27:33'),(106,'1697203654214-1697203654214-1697203654214-1697203654214','10000','2000','10000','8000','2023-10-13 18:27:34','2023-10-13 18:27:34'),(107,'1697203654626-1697203654626-1697203654626-1697203654626','10000','2000','10000','8000','2023-10-13 18:27:34','2023-10-13 18:27:34'),(108,'1697203656127-1697203656127-1697203656127-1697203656127','10000','2000','10000','8000','2023-10-13 18:27:36','2023-10-13 18:27:36'),(109,'1697203656605-1697203656605-1697203656605-1697203656605','10000','2000','10000','8000','2023-10-13 18:27:36','2023-10-13 18:27:36'),(110,'1697203657212-1697203657212-1697203657212-1697203657212','10000','2000','10000','8000','2023-10-13 18:27:37','2023-10-13 18:27:37'),(111,'1697203657818-1697203657818-1697203657818-1697203657818','10000','2000','10000','8000','2023-10-13 18:27:37','2023-10-13 18:27:37'),(112,'1697203658315-1697203658315-1697203658315-1697203658315','10000','2000','10000','8000','2023-10-13 18:27:38','2023-10-13 18:27:38'),(113,'1697203658822-1697203658822-1697203658822-1697203658822','10000','2000','10000','8000','2023-10-13 18:27:38','2023-10-13 18:27:38'),(114,'1697203659314-1697203659314-1697203659314-1697203659314','10000','2000','10000','8000','2023-10-13 18:27:39','2023-10-13 18:27:39'),(115,'1697203659880-1697203659880-1697203659880-1697203659880','10000','2000','10000','8000','2023-10-13 18:27:39','2023-10-13 18:27:39'),(116,'1697203667165-1697203667165-1697203667165-1697203667165','10000','2000','10000','8000','2023-10-13 18:27:47','2023-10-13 18:27:47'),(117,'1697203667783-1697203667783-1697203667783-1697203667783','10000','2000','10000','8000','2023-10-13 18:27:47','2023-10-13 18:27:47'),(118,'1697203668430-1697203668430-1697203668430-1697203668430','10000','2000','10000','8000','2023-10-13 18:27:48','2023-10-13 18:27:48'),(119,'1697203669561-1697203669561-1697203669561-1697203669561','10000','2000','10000','8000','2023-10-13 18:27:49','2023-10-13 18:27:49'),(120,'1697203671292-1697203671292-1697203671292-1697203671292','10000','2000','10000','8000','2023-10-13 18:27:51','2023-10-13 18:27:51'),(121,'1697203673363-1697203673363-1697203673363-1697203673363','10000','2000','10000','8000','2023-10-13 18:27:53','2023-10-13 18:27:53'),(122,'1697203674117-1697203674117-1697203674117-1697203674117','10000','2000','10000','8000','2023-10-13 18:27:54','2023-10-13 18:27:54'),(123,'1697203674631-1697203674631-1697203674631-1697203674631','10000','2000','10000','8000','2023-10-13 18:27:54','2023-10-13 18:27:54'),(124,'1697203676108-1697203676108-1697203676108-1697203676108','10000','2000','10000','8000','2023-10-13 18:27:56','2023-10-13 18:27:56'),(125,'1697203676904-1697203676904-1697203676904-1697203676904','10000','2000','10000','8000','2023-10-13 18:27:56','2023-10-13 18:27:56'),(126,'1697203677503-1697203677503-1697203677503-1697203677503','10000','2000','10000','8000','2023-10-13 18:27:57','2023-10-13 18:27:57'),(127,'1697203678068-1697203678068-1697203678068-1697203678068','10000','2000','10000','8000','2023-10-13 18:27:58','2023-10-13 18:27:58'),(128,'1697203678548-1697203678548-1697203678548-1697203678548','10000','2000','10000','8000','2023-10-13 18:27:58','2023-10-13 18:27:58'),(129,'1697299605324-1697299605324-1697299605324-1697299605324','10000','2000','10000','8000','2023-10-14 21:06:45','2023-10-14 21:06:45'),(130,'1697299757521-1697299757521-1697299757521-1697299757521','10000','2000','10000','8000','2023-10-14 21:09:17','2023-10-14 21:09:17'),(131,'1697299760885-1697299760885-1697299760885-1697299760885','10000','2000','10000','8000','2023-10-14 21:09:20','2023-10-14 21:09:20'),(132,'1697299761551-1697299761551-1697299761551-1697299761551','10000','2000','10000','8000','2023-10-14 21:09:21','2023-10-14 21:09:21'),(133,'1697299762021-1697299762021-1697299762021-1697299762021','10000','2000','10000','8000','2023-10-14 21:09:22','2023-10-14 21:09:22'),(134,'1697299762446-1697299762446-1697299762446-1697299762446','10000','2000','10000','8000','2023-10-14 21:09:22','2023-10-14 21:09:22'),(135,'1697299763032-1697299763032-1697299763032-1697299763032','10000','2000','10000','8000','2023-10-14 21:09:23','2023-10-14 21:09:23'),(136,'1697299763462-1697299763462-1697299763462-1697299763462','10000','2000','10000','8000','2023-10-14 21:09:23','2023-10-14 21:09:23'),(137,'1697299763955-1697299763955-1697299763955-1697299763955','10000','2000','10000','8000','2023-10-14 21:09:23','2023-10-14 21:09:23'),(138,'1697300120758-1697300120758-1697300120758-1697300120758','10000','2000','10000','8000','2023-10-14 21:15:20','2023-10-14 21:15:20'),(139,'1697300121619-1697300121619-1697300121619-1697300121619','10000','2000','10000','8000','2023-10-14 21:15:21','2023-10-14 21:15:21'),(140,'ed1cc7b6-a22d-4559-8910-867623d3244c','10000','2000','10000','8000','2023-10-15 00:14:50','2023-10-15 00:14:50'),(141,'9a04b244-547e-4765-87de-1e2891c1378f','10000','2000','10000','8000','2023-10-15 00:36:10','2023-10-15 00:36:10'),(142,'2c38148d-665a-4bcf-bc81-e3680c334842','10000','2000','10000','8000','2023-10-17 15:41:57','2023-10-17 15:41:57'),(143,'989d2f40-4709-4425-8455-398c0159ffee','10000','2000','10000','8000','2023-10-17 15:42:01','2023-10-17 15:42:01');
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-17 17:41:23
