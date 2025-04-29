// to group related methods
class MathUtils {
    static distance(ax, ay, bx, by) {
        return Math.sqrt((ax - bx) * (ax - bx) +
              (ay - by) * (ay - by),
        )
    }
    static range(start, stop) {
        return new Array(stop - start + 1)
            .fill(0)
            .map((v, i) => start + i)
    }
}

console.log(MathUtils.distance(5,10,250,200));
console.log(MathUtils.range(3,9));
