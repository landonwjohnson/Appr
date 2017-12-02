UPDATE project_idea
    SET idea_data = $2
    WHERE id = $1
;