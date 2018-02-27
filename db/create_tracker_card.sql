BEGIN;

INSERT INTO tracker_card (project_id, card_name, card_data, card_order, list_id)
    VALUES
        ($1, $2, $3, $4, $5)
;

SELECT * FROM tracker_card
    WHERE project_id = $1
    ORDER BY card_order
;

COMMIT;