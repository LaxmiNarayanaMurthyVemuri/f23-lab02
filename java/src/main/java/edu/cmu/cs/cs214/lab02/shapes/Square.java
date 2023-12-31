package edu.cmu.cs.cs214.lab02.shapes;

public class Square implements Shape {
    private double sideLen;

    public Square(final double sideLen) {
        this.sideLen = sideLen;
    }

    public final double getArea() {
        return sideLen * sideLen;
    }
}
