/**
 * @file
 * @author jinguangguo
 * @date 2016/1/15
 */

let TEXTS = [
    {
        txt: '开学季新装备'
    },
    {
        txt: '精品课程大促销'
    }
];

let TextClass = React.createClass({
    render: function() {
        var items = [];

        _.forEach(TEXTS, function(text, index) {
            items.push(
                <li className="item">
                    <a href="javascript:;" title={text.txt} className="item-link">
                        {text.txt}
                    </a>
                </li>
            );
        });

        return (
            <ul className="widget-show-text">
                {items}
            </ul>
        );
    }
});

module.exports = TextClass;

