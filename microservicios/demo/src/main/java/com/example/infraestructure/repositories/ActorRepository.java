package com.example.infraestructure.repositories;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.domains.entities.Actor;

public interface ActorRepository extends JpaRepository<Actor, Integer> {
	List<Actor> findByFirstNameStartingWithOrderByLastNameDesc(String prefijo);
	List<Actor> findByLastUpdateGreaterThan(LocalDate fecha);
	
	@Query("FROM Actor a WHERE a.lastUpdate > ?1")
	List<Actor> laMia(Date fecha);
}
