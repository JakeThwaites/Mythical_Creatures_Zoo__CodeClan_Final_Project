package com.example.demo;

import com.example.demo.IKill.IKill;
import com.example.demo.IKill.IKillEat;
import com.example.demo.Models.*;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MenagerieTest {

    private MythicalCreature harpy;
    private MythicalCreature dragon;
    private IKill killBehaviour;
    private Menagerie menagerie;
    private Enclosure enclosure;
    private Visitor visitor;

    @Before
    public void before() {
        killBehaviour = new IKillEat();
        harpy = new MythicalCreature("Harpy", "Male", "IKillEat", "Greek", "", "Harpy");
        dragon = new MythicalCreature("bob", "Male", "IKillEat", "Greek", "", "Dragon");
        enclosure = new Enclosure(2, "Greek", "Greek");
        menagerie = new Menagerie("Name", 10);
        visitor = new Visitor();
    }

    @Test
    public void canAddEnclosure() {
        menagerie.addEnclosure(enclosure);
        assertEquals(1, menagerie.getEnclosures().size());
    }

    @Test
    public void canRemoveEnclosure(){
        menagerie.addEnclosure(enclosure);
        menagerie.removeEnclosure(enclosure);
        assertEquals(0, menagerie.getEnclosures().size());
    }

    @Test
    public void canAddVisitor() {
        menagerie.addVisitor(visitor);
        assertEquals(1, menagerie.getVisitors().size());
    }

    @Test
    public void canRemoveVisitor(){
        menagerie.addVisitor(visitor);
        assertEquals(1, menagerie.getVisitors().size());
        menagerie.removeVisitor(visitor);
        assertEquals(0, menagerie.getVisitors().size());
    }
}