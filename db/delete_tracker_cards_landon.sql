    DELETE FROM tracker_card 
    WHERE list_id = $2
    AND project_id = $1;