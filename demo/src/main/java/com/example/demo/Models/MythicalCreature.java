package com.example.demo.Models;

import com.example.demo.IKill.IKill;

import javax.persistence.*;

@Entity
@Table(name = "mythical_creatures")
public class MythicalCreature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private Gender gender;

    @Column(name = "kill_behaviour")
    private IKill killBehaviour;

    @Column(name = "originLocation")
    private OriginLocation originLocation;

    @Column(name = "description")
    private String description;

    public MythicalCreature(String name, Gender gender, IKill killBehaviour, OriginLocation originLocation, String description) {
        this.name = name;
        this.gender = gender;
        this.killBehaviour = killBehaviour;
        this.originLocation = originLocation;
        this.description = description;
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

    public Enum getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public IKill getEatBehaviour() {
        return killBehaviour;
    }

    public void setEatBehaviour(IKill eatBehaviour) {
        this.killBehaviour = eatBehaviour;
    }

    public Enum getOriginLocation() {
        return originLocation;
    }

    public void setOriginLocation(OriginLocation originLocation) {
        this.originLocation = originLocation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String eat(){
        String eatString = killBehaviour.kill();
        return eatString;
    }

    public IKill getKillBehaviour() {
        return killBehaviour;
    }

    public void setKillBehaviour(IKill killBehaviour) {
        this.killBehaviour = killBehaviour;
    }
}
