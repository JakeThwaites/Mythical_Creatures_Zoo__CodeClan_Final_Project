package com.example.demo;

import com.example.demo.IKill.IKill;
import com.example.demo.IKill.IKillEat;
import com.example.demo.Models.Enclosure;
import com.example.demo.Models.MythicalCreature;
import com.example.demo.Models.Gender;
import com.example.demo.Models.OriginLocation;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EnclosureTest {

    private MythicalCreature harpy;
    private MythicalCreature dragon;
    private IKill eatBehaviour;
    private Enclosure enclosure;

    @Before
    public void before() {
        eatBehaviour = new IKillEat();
        harpy = new MythicalCreature("Harpy", "Male", "IKillEat", "Greek", "", "Harpy");
        dragon = new MythicalCreature("bob", "Male", "IKillEat", "Greek", "", "Dragon");
        dragon = new MythicalCreature("bob", "Male", "IKillEat", "Chinese", "", "Dragon");
        enclosure = new Enclosure(2, "Greek", "Greek");
    }

    @Test
    public void enclosureStartsEmpty(){
        assertEquals(0, enclosure.getCreatures().size());
     }

     @Test
    public void canAddCreature(){
        enclosure.addCreature(harpy);
        assertEquals(1, enclosure.getCreatures().size());
     }

     @Test
    public void canRemoveCreature(){
        enclosure.addCreature(harpy);
        enclosure.removeCreature(harpy);
        assertEquals(0, enclosure.getCreatures().size());
     }

     @Test
    public void onlyAddCreatureIfCorrectLocation(){
        enclosure.addCreature(dragon);
        assertEquals(0, enclosure.getCreatures().size());
     }

     @Test
    public void canFeedCreature(){
        assertEquals("I eat humans, yum yum", enclosure.feedCreatureHuman(harpy));
     }


}