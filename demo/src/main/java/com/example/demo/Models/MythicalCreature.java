package com.example.demo.Models;

import com.example.demo.IKill.IKill;
import com.example.demo.IKill.IKillFactory;

import javax.persistence.*;

@Entity
@Table(name = "mythicalCreatures")
public class MythicalCreature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private String gender;

    @Column(name = "killBehaviour")
    private String killBehaviourString;

    @Column(name = "originLocation")
    private String originLocation;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "enclosure_id")
    private Enclosure enclosure;

    @Column(name = "breed")
    private String breed;

    public MythicalCreature(String name, String gender, String killBehaviourString, String originLocation, String description, String breed) {
        this.name = name;
        this.gender = gender;
        this.killBehaviourString = killBehaviourString;
        this.originLocation = originLocation;
        this.description = description;
        this.enclosure = null;
        this.breed = breed;
    }

    public MythicalCreature(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getKillBehaviourString() {
        return killBehaviourString;
    }

    public void setKillBehaviourString(String killBehaviourString) {
        this.killBehaviourString = killBehaviourString;
    }

    public String getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(String originLocation) {
        this.originLocation = originLocation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String eat(){

        //Uses factory method to generate killBehaviour, and returns string from this.

        IKillFactory iKillFactory = new IKillFactory();
        IKill killBehaviour = iKillFactory.getKillBehaviour(this.killBehaviourString);
        String eatHuman = killBehaviour.kill();
        return eatHuman;
    }

    public Enclosure getEnclosure() {
        return enclosure;
    }

    public void setEnclosure(Enclosure enclosure) {
        this.enclosure = enclosure;
    }

}
