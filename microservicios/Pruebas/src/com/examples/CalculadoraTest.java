package com.examples;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class CalculadoraTest {
	Calculadora calc;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calc = new Calculadora();		
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void testSuma() {
		assertEquals(4, calc.suma(2, 2));
	}

	@Test
	void test_Divide_Double_Double() {
		assertEquals(0.5, calc.divide(1.0, 2));
		//assertThrows(Exception.class, () -> calc.divide(1.0, 0));
		assertEquals(Double.POSITIVE_INFINITY, calc.divide(1.0, 0));
	}

	@Test
	@DisplayName("Division entera")
	void testDivideIntInt() {
		assertEquals(0, calc.divide(1, 2));
		assertThrows(Exception.class, () -> calc.divide(1, 0));
	}

}
