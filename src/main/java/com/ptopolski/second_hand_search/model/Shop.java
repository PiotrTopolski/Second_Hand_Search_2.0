package com.ptopolski.second_hand_search.model;

import javax.persistence.*;

@Entity
@Table(name = "shop")

public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;

    private String shopName;

    @OneToOne
    private Location location;
    @OneToOne
    private Price price;
    @OneToOne
    private Open open;
    @OneToOne
    private Close close;
    @OneToOne
    private Delivery delivery;

    public Shop() {
    }
    public Shop(long id) {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public Price getPrice() {
        return price;
    }

    public void setPrice(Price price) {
        this.price = price;
    }

    public Delivery getDelivery() {
        return delivery;
    }

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
    }

    public Open getOpen() {
        return open;
    }

    public void setOpen(Open open) {
        this.open = open;
    }

    public Close getClose() {
        return close;
    }

    public void setClose(Close close) {
        this.close = close;
    }
}
