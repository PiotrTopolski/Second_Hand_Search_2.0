package com.ptopolski.second_hand_search.model;

import javax.persistence.*;

@Entity
@Table(name = "delivery")

public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;

    private String dayDelivery;

    @OneToOne
    private Shop shop;

    public Delivery(){}
    public Delivery(long id){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDayDelivery() {
        return dayDelivery;
    }

    public void setDayDelivery(String dayDelivery) {
        this.dayDelivery = dayDelivery;
    }
}
