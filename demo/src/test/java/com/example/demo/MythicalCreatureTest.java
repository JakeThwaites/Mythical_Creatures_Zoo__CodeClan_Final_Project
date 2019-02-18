package com.example.demo;

import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;

import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MythicalCreatureTest {

    private MythicalCreature harpy;
    private MythicalCreature unicorn;

    @Before
    public void before() {
        harpy = new MythicalCreature("Harpy", "Male", "IKillEat", "Greek", "", "Harpy");
        unicorn = new MythicalCreature("Melvin", "Male", "IDontKill", "Greek", "", "Unicorn");
    }

    @Test
    public void hasName() {
        assertEquals("Harpy", harpy.getName());
    }

    @Test
    public void canEatHuman(){
        assertEquals("I eat humans, yum yum", harpy.eat());
    }

    @Test
    public void canEatPlants(){
        assertEquals("I eat plants", unicorn.eat());
    }
}