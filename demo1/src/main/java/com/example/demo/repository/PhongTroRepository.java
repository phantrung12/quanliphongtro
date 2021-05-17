package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.PhongTro;

@Repository
public interface PhongTroRepository extends JpaRepository<PhongTro, Integer>{

}
