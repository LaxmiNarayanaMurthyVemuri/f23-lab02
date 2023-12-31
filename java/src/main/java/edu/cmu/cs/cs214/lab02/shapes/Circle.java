package edu.cmu.cs.cs214.lab02.shapes;

public class Circle implements Shape {
    private double radius;

    public Circle(final double radius) {
        this.radius = radius;
    }

    public final double getArea() {
        return Math.PI * radius * radius;
    }
}
