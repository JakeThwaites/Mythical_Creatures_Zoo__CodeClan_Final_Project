package com.example.demo;

import com.example.demo.IKill.IDontKill;
import com.example.demo.IKill.IKill;
import com.example.demo.IKill.IKillEat;
import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;

import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MythicalCreatureTest {

    private MythicalCreature harpy;
    private MythicalCreature unicorn;
    private IKill killBehaviour;
    private IDontKill eatBehaviour;

    @Before
    public void before() {
        killBehaviour = new IKillEat();
        eatBehaviour = new IDontKill();
        harpy = new MythicalCreature("Harpy", Gender.Male, killBehaviour, OriginLocation.Greek, "", "Harpy");
        unicorn = new MythicalCreature("Melvin", Gender.Female, eatBehaviour, OriginLocation.Greek, "", "Unicorn");
    }

    @Test
    public void hasName() {
        assertEquals("Harpy", harpy.getName());
    }

    @Test
    public void canEatHuman(){
        assertEquals("I eat humans, yum yum", harpy.eatHuman());
    }

    @Test
    public void canEatPlants(){
        assertEquals("I eat plants", unicorn.eatPlants());
    }
}