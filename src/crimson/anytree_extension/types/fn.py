from anytree import NodeMixin
from typing import Callable, TypeVar, Generic

T = TypeVar("T")


class IntelliHolder(Generic[T]):
    """
    Dummy Generic to use it as IntelliHolder.
    """


class FilterFn(Callable[[NodeMixin], bool], IntelliHolder[T]):
    """
    ``` python
    def example_filter(node: Node) -> bool:
        bool_value = "If it is true, the node is included into the collapsed tree."
        return bool_value
    ```
    """

    pass
