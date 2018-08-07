package com.ptopolski.second_hand_search.model;

import javax.persistence.*;

@Entity
@Table(name = "location")

public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;

    private double lat;
    private double lng;
    private String city;
    private String postCode;
    private String street;
    private String houseNumber;

    @OneToOne
    private Shop shop;

    public Location() {
    }
    public Location(long id) {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }
}
