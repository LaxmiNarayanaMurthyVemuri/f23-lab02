function circle(sideLen: number): Shape {
    return {
        sideLen,
        computeArea: function (): number {
            return Math.PI * sideLen * sideLen
        }
    }
}

export { circle }
