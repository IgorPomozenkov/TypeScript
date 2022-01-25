
abstract class MyGraphicsPrimitive2D {
  constructor(public rectangularArea: string) {}

  public movePrimitive() {}
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(public area: number, rectangularArea: string) {
    super(rectangularArea)
  }
}

class MyCircle extends MyAreaPrimitive2D {
  constructor(public center: number, public radius: number, area: number, rectangularArea: string) {
    super(area, rectangularArea)
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    public width: number,
    public height: number,
    public topLeftBorder: number,
    public bottomRightBorder: number,
    area: number,
    rectangularArea: string
  ) {
    super(area, rectangularArea)
  }
}
