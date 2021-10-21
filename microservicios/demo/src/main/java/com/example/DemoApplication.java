package com.example;

import java.time.LocalDate;
import java.util.Date;
import java.util.Optional;

import javax.transaction.Transactional;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Film;
import com.example.infraestructure.repositories.ActorRepository;
import com.example.ioc.Servicio;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Autowired
	Servicio srv;
	
	@Value("${mi.propia.clave}")
	String name;
	
	@Autowired
	ActorRepository dao;
	
	@Override
	@Transactional
	public void run(String... args) throws Exception {
//		Optional<Actor> a = dao.findById(201);
//		if(a.isPresent())
//			System.out.println(a.get());
//		else {
//			System.out.println("No encontrado");
//		}
		
		Actor actor= new Actor(0, "Pepito", "Grillo");
		actor.addFilmActor(new Film(1));
//		Actor actor= a.get();
//		actor.setFirstName(actor.getFirstName().toUpperCase());
//		dao.save(actor);
////		dao.deleteById(201);
//		dao.findAll().forEach(System.out::println);
//		

//		Optional<Actor> a = dao.findById(1);
//		if(a.isPresent()) {
//			System.out.println(a.get());
//			a.get().getFilmActors().forEach(item -> System.out.println(item.getFilm()));
//		} else {
//			System.out.println("No encontrado");
//		}
		//dao.findByFirstNameStartingWithOrderByLastNameDesc("P").forEach(System.out::println);
//		dao.laMia(new Date(LocalDate.now().toString())).forEach(System.out::println);
//		dao.findByLastUpdateGreaterThan(LocalDate.now()).forEach(System.out::println);

	}

}