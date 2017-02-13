import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) { return `Title ${i}`; },
  body: "Selvage mustache hashtag woke. Pour-over you probably haven't heard of them keffiyeh farm-to-table, tumblr lo-fi vexillologist taxidermy. Unicorn you probably haven't heard of them trust fund actually artisan. Yr la croix tilde shabby chic, fap jianbing cray. Organic taxidermy craft beer ugh tofu kinfolk. Migas chambray tousled, put a bird on it lyft asymmetrical yuccie whatever edison bulb actually microdosing enamel pin. Pickled portland fanny pack artisan four dollar toast everyday carry pug fam la croix meditation.",
});
