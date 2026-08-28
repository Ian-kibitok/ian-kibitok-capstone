items = [

    {

        "id":1,

        "name":"Laptop",

        "description":"Gaming Laptop",

        "price":1200

    }

]


def get_items():

    return items


def create_item(db, item):
    """Create an item (in-memory stub). Accepts a DB param for compatibility."""
    # item may be a Pydantic model; convert to dict
    item_data = item.model_dump() if hasattr(item, "model_dump") else dict(item)
    new_id = max((i.get("id", 0) for i in items), default=0) + 1
    item_record = {"id": new_id, **item_data}
    items.append(item_record)
    return item_record