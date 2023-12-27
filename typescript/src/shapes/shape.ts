interface Shape {
    sideLen: number;
    computeArea: () => number;
}

function computeArea(config: Shape):  { sideLen: number } {
    return  {sideLen: 20};
}

// export {Shape, computeArea }