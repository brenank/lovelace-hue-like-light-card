export class Point {
    public constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    public readonly X: number;
    public readonly Y: number;

    public getYDiff(startPoint: Point) {
        return this.Y - startPoint.Y;
    }

    public getXDiff(startPoint: Point) {
        return this.X - startPoint.X;
    }

    public getDiff(startPoint: Point) {
        return new Point(
            this.getXDiff(startPoint),
            this.getYDiff(startPoint)
        );
    }

    public toString() {
        return `[${this.X},${this.Y}]`;
    }
}

/** Simple type for coordinates from Mouse. */
export class MousePoint extends Point {
    public constructor(mouseEvent: MouseEvent) {
        super(mouseEvent.clientX, mouseEvent.clientY);
    }
}

/** Simple type for coordinates from Touch. */
export class TouchPoint extends Point {
    public constructor(touch: Touch) {
        super(touch.clientX, touch.clientY);
    }
}