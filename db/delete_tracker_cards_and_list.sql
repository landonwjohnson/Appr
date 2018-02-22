
BEGIN;
    DELETE FROM tracker_card 
        WHERE list_order = $3 
        AND project_id = $2;

    DELETE FROM tracker_list
        WHERE id = $1
        AND project_id = $2
        AND list_order = $3;
COMMIT;