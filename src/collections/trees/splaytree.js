
import BinaryTree from './binarytree.interface';
import __BINARYTREESYMBOLS from './private/__binarytreesymbols';

export default ((size, root, cmpf) => {

	/**
	 * @classdesc SplayTree
	 * @implements {BinaryTree}
	 */
	class SplayTree extends BinaryTree {
		/**
		 * Creates an empty Splay Tree
		 *
		 * @param {cmpFtn?} - If no comparison function is passed then the [default comparison function]{@link Collection#cmpFtn} is used.
		 */
		constructor(cmpFtn=null) {
			super(cmpFtn);
		}

		add(element) {
			// TODO
			return this;
		}

		addAll(...elements) {
			for (let e of elements) {
				this.add(e);
			}
			// TODO
			return this;
		}

		delete(element) {
			if (this[size] === 0) {
				throw new EmptyCollectionError('Can\'t delete from an empty SplayTree');
			}
			// TODO
			return false;
		}

		map(cb) {
			super._throwIfNotFunction(cb);
			let newTree = new SplayTree(this[cmpf]);
			// TODO
			return newTree;
		}
	}

	return SplayTree;

})(__BINARYTREESYMBOLS.SIZE, __BINARYTREESYMBOLS.ROOT, __BINARYTREESYMBOLS.CMPF);