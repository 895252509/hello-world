
const zcf = new Zcf("#can");
const zmm = new Zmm();
zcf.model = zmm;

const rect = new Rectangle(new Point(), new Point(100,100));
zmm.add(rect);