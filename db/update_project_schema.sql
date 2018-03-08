UPDATE project_schema
    SET
        schema_name = $3,
        database_type = $4,
        schema_data = $5
        -- table_name_id = $3,
        -- column_name = $4,
        -- schema_type_id = $5,
        -- size_data = $6,
        -- is_primary_key = $7,
        -- is_foreign_key = $8,
        -- is_serial = $9,
        -- is_not_null = $10,
        -- is_unique = $11
    WHERE id = $2
    AND project_id = $1
;